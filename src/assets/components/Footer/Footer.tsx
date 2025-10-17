type FooterProps = {
  year: number;
};

const Footer = (props: FooterProps) => {
  const year = props.year ?? new Date().getFullYear();

  return <p className="footer">© {year}. All rights reserved.</p>;
};

export default Footer;
