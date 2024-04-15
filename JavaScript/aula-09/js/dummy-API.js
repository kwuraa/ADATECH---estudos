async function getUsers() {
  const response = await fetch("https://dummyapi.io/data/v1/user?created=1", {
    headers: {
      "app-id": "661d413fd25ec46b53265568",
    },
  });

  const users = await response.json();

  console.log(users.data);
}

getUsers();

async function getUser() {
  const response = await fetch(
    "https://dummyapi.io/data/v1/user/661d4957cc33e6b6303b1140",
    {
      headers: {
        "app-id": "661d413fd25ec46b53265568",
      },
    }
  );
  const user = await response.json();

  console.log(user);
}
getUser();

async function createUser() {
  // const userData = {
  //   firstName: "outro",
  //   lastName: "usuarios",
  //   email: "outro@eemail.com",
  // };

  try {
    await fetch("https://dummyapi.io/data/v1/user/create", {
      method: "POST",
      headers: {
        "app-id": "661d413fd25ec46b53265568",
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  } catch (err) {
    console.log("deu erro!", err);
  }
}
createUser();

async function deleteUser() {
  try {
    const response = await fetch(
      "https://dummyapi.io/data/v1/user/661d489206d23a7f21f1526",
      {
        method: "DELETE",
        headers: {
          "app-id": "661d413fd25ec46b53265568",
        },
      }
    );
    console.log(response, "DELETADO!");
  } catch (err) {
    console.log("erro ao deletar o user", err);
  }
}
deleteUser();
