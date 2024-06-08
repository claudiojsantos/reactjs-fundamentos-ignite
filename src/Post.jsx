export function Post(props) {
  return (
    <>
      <strong>
        <h1>{props.author}</h1>
      </strong>
      <h3>{props.content}</h3>
    </>
  );
}
