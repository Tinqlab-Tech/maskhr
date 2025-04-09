export default function NavItem({ text, link }) {
  return (
    <nav
      className={`text-white group text-[16px] hover:font-bold font-Gilroy font-normal hover:text-primary cursor-pointer`}
    >
      {text}
    </nav>
  );
}
