async function fetchingCallingUser(userID) {
  // we can use try and catch block
  const apiResponse = await fetch(`https://dummyjson.com/users/${userID}`);
  const data = await apiResponse.json();
  return data;
}

export default async function userDeatails({ params }) {
  const singleUser = await fetchingCallingUser(params.details);
  console.log(singleUser);
  return (
    <div>
      <h1>User Details</h1>
      <p>{singleUser?.phone}</p>
    </div>
  );
}
