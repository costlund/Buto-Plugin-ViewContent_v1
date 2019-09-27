<?php
class PluginViewContent_v1{
  public function widget_include(){
    $element = array();
    $element[] = wfDocument::createHtmlElement('style', ".plugin_view_content{display:none;}");
    $element[] = wfDocument::createWidget('wf/embed', 'embed', array('type' => 'script', 'file' => '/plugin/view/content_v1/js/function.js'));
    wfDocument::renderElement($element);
  }
}
