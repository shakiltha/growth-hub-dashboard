import { IoMdArrowDropright } from "react-icons/io";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1 Jun",
    revenue: 17,
  },
  {
    name: "2 Jun",
    revenue: 4,
  },
  {
    name: "3 Jun",
    revenue: 18,
  },
  {
    name: "4 Jun",
    revenue: 26,
  },
  {
    name: "5 Jun",
    revenue: 28,
  },
  {
    name: "6 Jun",
    revenue: 19,
  },
  {
    name: "7 Jun",
    revenue: 19,
  },
];

const BarChartDraw = () => {
  const handleLabel = (label) => {
    if (label === 0) return 0;
    return label + "k";
  };
  return (
    <div className="dark:bg-[#0F172A] rounded-lg inter mx-2">
      <div className="flex justify-between items-center p-2">
        <p className="capitalize text-lg">latest sales</p>
        <select className="select max-w-xs">
          <option>Last 7 days</option>
          <option>Last 15 days</option>
          <option>Last 30 days</option>
          <option>Last 2 month</option>
          <option>Last 3 month</option>
        </select>
      </div>
      <div className="divider"></div>
      <div className="w-[360px] h-[400px] md:w-[700px] md:h-[600px] lg:w-full xl:w-[60rem] xl:h-[20rem]  mx-auto ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name">
              <Label
                value="revenue by month"
                offset={0}
                position="insideBottom"
              />
            </XAxis>
            <YAxis
              type="number"
              tickCount={8}
              tickFormatter={(label) => handleLabel(label)}
              label={{ value: "revenue", angle: -90, position: "insideLeft" }}
            />
            <Tooltip shared={false} trigger="click" />
            <Bar dataKey="revenue" fill="#8884d8" barSize={50}>
              <LabelList dataKey={"revenue"} position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="divider"></div>
      <div className="flex justify-end p-2">
        <button className="btn">
          View all <IoMdArrowDropright />
        </button>
      </div>
    </div>
  );
};

export default BarChartDraw;
