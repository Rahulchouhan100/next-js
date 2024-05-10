import Link from "next/link";

async function fetchListOfUser() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/users");
    const data = await apiResponse.json();
    return data.users;
  } catch (err) {
    throw new Error(err);
  }
}

export default async function serverSideDataFetching() {
  const listOfUser = await fetchListOfUser();
  console.log(listOfUser);
  return (
    <div>
      <h1 className="text-5xl">server side data fetching</h1>

      <ul>
        {listOfUser && listOfUser.length > 0
          ? listOfUser.map((user) => {
              return (
                <div className="flex">
                  <li
                    className="bg-red-400 p-4 my-5 cursor-pointer"
                    key={user.id}
                  >
                    <Link href={`/serverside-data-fetching/${user?.id}`}>
                      {user?.firstName}
                    </Link>
                  </li>
                </div>
              );
            })
          : null}
      </ul>
    </div>
  );
}
