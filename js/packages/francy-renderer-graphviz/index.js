import Canvas from './src/canvas';
import { RenderingConfiguration } from 'francy-core';

export class GraphvizRenderer extends RenderingConfiguration {
    
  constructor(isDefault = false) {
    super(Canvas, 'GraphViz-Renderer', isDefault);
  }
}
