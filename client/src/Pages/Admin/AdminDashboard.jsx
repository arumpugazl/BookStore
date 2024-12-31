import Sidenav from "../../Components/SideNavigation/Sidenav";
import ProductTable from "../../Components/ProductDetails/ProductTable";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const AdminDashbaord = () => {
  return (
    <section className="flex bg-[#161B21] h-screen">
      <Sidenav />

      <div className="flex flex-col w-full m-12">
        <h1 className="text-white text-3xl">Products</h1>
        <div className="mt-10">
          <div className="flex justify-end w-[61vw]">
            <Link to={'/admin/addproduct'}>
              <button className="text-white py-2 px-3 mb-5 bg-gray-700 rounded-md ">
                <FontAwesomeIcon icon={faAdd} className="mr-2" />
                Add Product
              </button>
            </Link>
          </div>

          <ProductTable />
        </div>
      </div>
    </section>
  );
};

export default AdminDashbaord;
