type heroTitleProps = {
  title: string;
};

const HeroTitle = (props: heroTitleProps) => {
  const { title } = props;
  return <h1 className="hero-title">{title}</h1>;
};

export default HeroTitle;
