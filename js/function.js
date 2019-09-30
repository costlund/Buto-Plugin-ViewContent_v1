function PluginViewContent_v1(){
  this.views = [];
  this.all_hide = function(){
    $('.plugin_view_content').hide();
    return null;
  }
  this.all_show = function(){
    $('.theme_content').show();
    return null;
  }
  this.show_one = function(id, url){
    if($('#'+id).hasClass('plugin_view_content_start')){
      this.clearViews();
    }
    this.views.push({id: id, url: url, start: $('#'+id).hasClass('plugin_view_content_start')});
    this.all_hide();
    $('#'+id).show();
    if(url){
      PluginWfAjax.load(id, url);
    }
  }
  this.clearViews = function(){
    this.views = [];
  }
  this.back = function(){
    this.views.splice(this.views.length-1, 1);
    this.all_hide();
    $('#'+this.views[this.views.length-1].id).show();
  }
  this.update = function(){
    var has_one = false;
    $(".plugin_view_content").each(function(){
      if($(this).css("display")=="block"){
        PluginWfAjax.update(this.id);
        has_one = true;
      }
    });
    if(!has_one){
      alert('Could not find any visible element!');
    }
    return null;
  }
}
var PluginViewContent_v1 = new PluginViewContent_v1();
