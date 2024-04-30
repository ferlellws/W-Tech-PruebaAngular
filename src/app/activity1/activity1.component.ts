
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { NgxEchartsModule } from 'ngx-echarts';
// import * as util from 'zrender/lib/core/util';
// import type { EChartsOption } from 'echarts';
import * as echarts from 'echarts/core';

import {
  TreeChart
} from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import type {
  TreeSeriesOption
} from 'echarts/charts';
import type {
  ComposeOption
} from 'echarts/core';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  TreeChart,
  CanvasRenderer
]);

// Amplía el tipo ECOption para incluir TreeSeriesOption como un tipo de serie válido
type ECOption = ComposeOption<
  | TreeSeriesOption
>;

@Component({
  selector: 'app-activity1',
  standalone: true,
  imports: [
    HttpClientModule,
  ],
  templateUrl: './activity1.component.html',
  styleUrl: './activity1.component.css'
})
export class Activity1Component implements OnInit {
  myChart: echarts.ECharts | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Inicializar el gráfico en el elemento con la clase 'main'
    this.myChart = echarts.init(document.querySelector('.main') as HTMLDivElement);

    // Configurar las opciones del gráfico utilizando el tipo ECOption
    const option: ECOption = {
      title: {
        text: 'Mapa conceptual'
      },
      tooltip: {},
      series: [
        {
          type: 'tree',
          data: [
            {
              name: "Nivel 1",
              children: [
                {
                  name: "Nivel 1.1",
                },
                {
                  name: "Nivel 1.2",
                },
              ]
            }
           ],
          top: '1%',
          left: '7%',
          bottom: '1%',
          right: '20%',
          symbolSize: 14,
          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 14
          },
          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left'
            }
          },
          emphasis: {
            focus: 'descendant'
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750
        }
      ]
    };

    // Aplicar las opciones al gráfico
    this.myChart.setOption(option);
  }
}
