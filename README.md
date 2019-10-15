# Buto-Plugin-ViewContent_v1

Handle views on a page.

## Settings

Include in head.

```
type: widget
data:
  plugin: 'view/content_v1'
  method: include
```



## Usage

### Element

All views will have class plugin_view_content and first view in a series will also have class plugin_view_content_start.

Views will be added dynamic on method show_one. If first view is start of a series of view one should add true as last parameter of three.

```
-
  type: div
  attribute:
    id: plugin_view_contents
  innerHTML:
```

One could style views.

```
-
  type: style
  innerHTML: |
    .plugin_view_content{
      border-top:solid 1px silver; 
      border-bottom:solid 1px silver; 
      padding-top:10px; 
      margin-bottom:10px; 
      min-height:500px;
    }
```

###Javascript

Add this script to load each view.

```
PluginViewContent_v1.show_one('load_customer_customers', '/customer/customers', true);
PluginViewContent_v1.show_one('load_customer_customer', '/customer/customer/id/1');
```

To navigate back to previous view.

```
PluginViewContent_v1.back();
```

To update visible element.

```
PluginViewContent_v1.update();
```

One could also load without url parameter to just show content.

```
PluginViewContent_v1.show_one('load_customer_customer');
```



