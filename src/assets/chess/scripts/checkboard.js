var Checkboard =
{

  container: '',
  block_dimensions: 40,
  light_color: '#FFF',
  dark_color: '#000',

  init: function(container, block_dimensions, light_color, dark_color)
  {
    /*
      var bd = block_dimensions
      var lc = light_color
      var dc = dark_color
    */

    var bd = (block_dimensions)? block_dimensions : this.block_dimensions;
    var lc = (light_color)? light_color : this.light_color;
    var dc = (block_dimensions)? dark_color : this.dark_color;

  }

};