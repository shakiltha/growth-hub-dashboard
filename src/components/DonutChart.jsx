import React, { Component } from "react";
import Chart from "react-apexcharts";
import { CiMobile2 } from "react-icons/ci";
import { IoIosTabletPortrait } from "react-icons/io";
import { TbDeviceDesktop } from "react-icons/tb";
import { ResponsiveContainer } from "recharts";

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          pie: {
            donut: {
              dataLabels: {
                style: {
                  fontSize: "20px",
                },
              },
            },
          },
        },
      },
      series: [5, 3, 2],
    };
  }

  render() {
    return (
      <div className="donut dark:bg-[#0F172A] rounded-lg inter mx-2">
        <h3 className="text-lg p-2">Traffic by Device</h3>
        <div className="divider"></div>
        <div className="w-[360px] h-[400px] md:w-[700px] md:h-[400px] lg:w-full xl:w-[30rem] xl:h-[20rem] mx-auto ">
          <ResponsiveContainer width="100%" height="100%">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="donut"
            />
          </ResponsiveContainer>
        </div>
        <div className="divider"></div>
        <div className="flex gap-10 justify-center mb-4 pb-2">
          <div>
            <TbDeviceDesktop className="w-10 h-10" />
            <p className="text-[#0068B9] mt-3 text-center">63%</p>
          </div>
          <div>
            <IoIosTabletPortrait className="w-10 h-10" />
            <p className="text-[#00A76D] mt-3 text-center">15%</p>
          </div>
          <div>
            <CiMobile2 className="w-10 h-10" />
            <p className="text-[#FEB019] mt-3 text-center">22%</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Donut;
