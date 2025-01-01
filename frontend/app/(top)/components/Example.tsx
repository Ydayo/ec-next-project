import { getExample } from "../libs/server";

const Example = async () => {
  const data = await getExample();

  if (!data) {
    return <>データは存在しません</>;
  }

  return (
    <>
      {data.amount}
      <div>{data.currency}</div>
    </>
  );
};

export default Example;
