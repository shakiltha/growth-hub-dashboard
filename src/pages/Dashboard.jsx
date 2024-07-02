import Card from "../components/Card";
import img1 from "../assets/Avatar.png";
import img2 from "../assets/Avatar-1.png";
import img4 from "../assets/Avatar-3.png";
import CardWithProgressBar from "../components/CardWithProgressBar";
import BarChartDraw from "../components/BarChartDraw";
import DonutChart from "../components/DonutChart";

const Dashboard = () => {
  return (
    <div className="lg:ml-80 lg:w-[40rem] xl:w-auto">
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
      <div className="xl:flex xl:justify-center">
        <BarChartDraw />
        <DonutChart />
      </div>
    </div>
  );
};

export default Dashboard;
