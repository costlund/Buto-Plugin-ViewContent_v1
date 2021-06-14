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
  this.show_one = function(id, url, start){
    /**
     * Clear views from history.
     */
    if($('#'+id).hasClass('plugin_view_content_start')){
      this.clearViews();
    }
    /**
     * Set view.
     */
    this.views.push({id: id, url: url, start: $('#'+id).hasClass('plugin_view_content_start')});
    /**
     * Hide all views.
     */
    this.all_hide();
    /**
     * Add view if not exist.
     */
    if(!$('#'+id).length){
      var div = document.createElement('div');
      div.id = id;
      if(start){
        div.setAttribute('class', 'plugin_view_content plugin_view_content_start')
      }else{
        div.setAttribute('class', 'plugin_view_content')
      }
      $('#plugin_view_contents').append(div);
    }else{
      if(!$('#'+id).hasClass('plugin_view_content')){
        $('#'+id).addClass('plugin_view_content');
      }
      if(start){
        if(!$('#'+id).hasClass('plugin_view_content_start')){
          $('#'+id).addClass('plugin_view_content_start');
        }
      }
    }
    /**
     * Show element.
     */
    $('#'+id).show();
    /**
     * Load element with Ajax.
     */
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
