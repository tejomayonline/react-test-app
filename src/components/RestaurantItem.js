function RestaurantItem({ title, food, setActiveIndex, isActive }) {
  return (
    <section
      className="panel border-gray-100 border-2 m-4 w-72"
      onClick={() => setActiveIndex()}
    >
      <h3 className="text-center cursor-pointer font-bold capitalize bg-gray-200">
        {title}
      </h3>
      {isActive && <p className="bg-cyan-300 py-32 text-center">{food}</p>}
    </section>
  );
}

export default RestaurantItem;
