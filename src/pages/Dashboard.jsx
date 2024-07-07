import Card from "../components/Card";
import img1 from "../assets/Avatar.png";
import img2 from "../assets/Avatar-1.png";
import img4 from "../assets/Avatar-3.png";
import CardWithProgressBar from "../components/CardWithProgressBar";
import BarChartDraw from "../components/BarChartDraw";
import DonutChart from "../components/DonutChart";
import LatestProducts from "../components/LatestProducts";
import LatestOrders from "../components/LatestOrders";
import SideBar from "../sharedComponent/SideBar/SideBar";
import NavBar from "../sharedComponent/NavBar";

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <SideBar />
      <div className=" xl:ml-80">
        <div className="md:flex flex-wrap">
          <Card
            budget="budget"
            money="$24k"
            img={img1}
            percent="12% Since last month"
          />
          <Card
            budget="total customers"
            money="1,6k"
            img={img2}
            percent="14% Since last month"
          />
          <CardWithProgressBar />
          <Card
            budget="total profit"
            money="$23k"
            img={img4}
            percent="19% Since last month"
          />
        </div>
        <div className="xl:flex xl:justify-center]">
          <BarChartDraw />
          <DonutChart />
        </div>
        <div className="lg:flex lg:gap-3">
          <LatestProducts />
          <LatestOrders />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
