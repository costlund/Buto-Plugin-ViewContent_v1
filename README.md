# Buto-Plugin-ViewContent_v1


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

All views must have class plugin_view_content and first view in a series should also have class plugin_view_content_start.

```
-
  type: div
  attribute:
    class: plugin_view_content plugin_view_content_start
    id: load_customer_customers
  innerHTML: Customers...
-
  type: div
  attribute:
    class: plugin_view_content
    id: load_customer_customer
  innerHTML: Customer...
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
PluginViewContent_v1.show_one('load_customer_customers', '/customer/customers');
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
