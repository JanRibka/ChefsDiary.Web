import ListItem from "./ListItem";

interface Props {
  facebookIcon: JSX.Element;
  instagramIcon: JSX.Element;
  tikTokIcon: JSX.Element;
  className?: string;
}

const SocialIcons = (props: Props) => {
  return (
    <ul className={props.className}>
      <ListItem
        title="Facebook"
        href="https://www.facebook.com/jan.ribka.1/"
        icon={props.facebookIcon}
      />
      <ListItem
        title="Instagram"
        href="https://www.instagram.com/ribkajan/"
        icon={props.instagramIcon}
      />
      <ListItem
        title="TikTok"
        href="https://www.tiktok.com/search?q=pruyem&t=1708111440869"
        icon={props.tikTokIcon}
      />
    </ul>
  );
};

export default SocialIcons;
