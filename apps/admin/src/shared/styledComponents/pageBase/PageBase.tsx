interface Props {
  header: string;
  children: JSX.Element;
}
// TODO: Pokud xl, nude menu v6dy viditeln2 a ml, bude podle toho, zada je menu otevrene nebo zavrene
const PageBase = (props: Props) => {
  return (
    <main className="bg-dialogBackground h-full ml-0 md:ml-24 xl:ml-0">
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
