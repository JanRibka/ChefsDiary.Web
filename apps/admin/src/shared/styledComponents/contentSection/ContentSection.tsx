import ContentSectionProps from "./ContentSectionProps";

const ContentSection = (props: ContentSectionProps) => {
  return (
    <div className="bg-white rounded-lg w-full m-0 p-0">
      <div className="p-4">{props.children}</div>
    </div>
  );
};

export default ContentSection;
