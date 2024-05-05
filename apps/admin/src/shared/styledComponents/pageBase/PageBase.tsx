interface Props {
  header: string;
  children: JSX.Element;
}

const PageBase = (props: Props) => {
  return (
    <main className="bg-dialogBackground">
      <div className="px-4 py-8">
        <div>
          <div className="mb-4">
            <h1 className="text-2xl text-primary">{props.header}</h1>
          </div>
          <div>{props.children}</div>
        </div>
      </div>
    </main>
  );
};

export default PageBase;
