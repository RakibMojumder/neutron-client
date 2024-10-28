import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-20 border flex items-center gap-x-5 text-lg">
      <Link href={"/"}>All Contacts</Link>
      <Link href={"/add-contact"}>Add Contacts</Link>
      <Link href={"/add-contact"}>Favorites</Link>
    </div>
  );
};

export default Navbar;
