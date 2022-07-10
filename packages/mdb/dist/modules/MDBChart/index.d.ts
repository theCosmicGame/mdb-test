import * as React$1 from 'react';
import { BaseComponent } from 'src/types/baseComponent';

interface ChartProps extends BaseComponent {
    type: 'bar' | 'line' | 'pie' | 'doughnut' | 'polarArea' | 'radar' | 'bubble' | 'scatter';
    options?: Record<string, unknown>;
    chartRef?: React.Ref<any>;
    datalabels?: boolean;
    data?: any;
}

declare const MDBChart: React$1.FunctionComponent<ChartProps>;

export { MDBChart as default };
