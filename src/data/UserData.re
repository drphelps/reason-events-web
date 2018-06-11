open BsAbstract;

let toOption = Js.Nullable.toOption; 

let (getWithDefault, some) = Js.Option.(getWithDefault, some);

type user = {
  .
  "id": string,
  "email": string,
  "name": option(string),
};

/***
 * JS interface
 */
type input = {
  .
  "clientMutationId": Js.Nullable.t(string),
  "user": {
    .
    "id": Js.Nullable.t(string),
    "createdAt": Js.Nullable.t(float),
    "updatedAt": Js.Nullable.t(float),
    "name": option(string),
    "email": option(string),
  },
};

let fromJs = input =>
  Option.Infix.(
    {
      "clientMutationId": input##clientMutationId |> toOption,
      "user": {
        "id": input##user##id |> toOption <#> Js.Json.string,
        "createdAt": input##user##createdAt |> toOption <#> Js.Json.number,
        "updatedAt": input##user##updatedAt |> toOption <#> Js.Json.number,
        "name": input##user##name,
        "email": input##user##email,
      },
    }
  );

let fromResponse = input : user => {
  "id": input##id |> Js.Json.decodeString |> getWithDefault(""),
  "email": input##email,
  "name": input##name,
};

let toInput = (user: user) => {
  "id": user##id |> Js.Json.string |> some,
  "email": user##email,
  "name": user##name,
};

module UserById = [%graphql
  {|
    query UserById($id: UUID!) {
      userById(id: $id) {
        id
        name
        email
      }
    }
  |}
];

module CreateUser = [%graphql
  {|
    mutation CreateUser($input: CreateUserInput!) {
      createUser(input: $input) {
        user {
          id
          name
          email
        }
      }
    }
  |}
];

/**
 * Plain JS interface
 */
let userById =
  (. id) => ApiClient.(client |> query(~request=UserById.make(~id, ())));

let createUser =
  (. input: input) =>
    ApiClient.(
      client |> mutate(~request=CreateUser.make(~input=fromJs(input), ()))
    );