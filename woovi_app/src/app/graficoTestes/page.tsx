import React from "react";
import Chart from "react-apexcharts";

export default function GraficoTestes() {
  const quantidadeSistemas = [44, 55, 41, 17, 15];
  const sistemas: any = {
    chart: {
      type: "donut",
    },
    labels: ["Licitação", "Contratação", "Frotas", "Folha de pagamento", "CTP"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const quantidadeDevs = [30, 25, 23, 10, 12];
  const devs: any = {
    chart: {
      type: "donut",
    },
    labels: ["Fulano", "Ciclano", "Beltrano", "Dev1", "Dev2"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const mediaPrazoQuantidade = [25, 55, 20];
  const mediaPrazo: any = {
    chart: {
      type: "donut",
    },
    labels: ["1 a 10 dias", "10 a 20 dias", "20 a 30 dias"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div className="flex justify-around">
      <Chart
        options={sistemas}
        series={quantidadeSistemas}
        type="donut"
        width="380"
      />
      <Chart options={devs} series={quantidadeDevs} type="donut" width="380" />
      <Chart
        options={mediaPrazo}
        series={mediaPrazoQuantidade}
        type="donut"
        width="380"
      />
    </div>
  );
}
