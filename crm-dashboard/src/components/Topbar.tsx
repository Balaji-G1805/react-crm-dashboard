const Topbar = () => {
  return (
    <div className="flex justify-between items-center px-4">
      <h1 className="text-lg font-semibold">Hello Evano 👋🏼</h1>
      <input
        className=" px-4 py-2 shadow bg-white rounded-full text-sm w-60"
        placeholder="Search"
      />
    </div>
  );
};

export default Topbar;
