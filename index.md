---
layout: page
title: Addresses
description: 
keywords: 
---

{% raw %}
<section ng-app="addressesApp" class="addresses-app">
  <div ng-controller="AddressesController as ctl">
    <h2>Find an address</h2>
    <form ng-submit="addressSearch(item, $event)" class="form-inline">
        <div class="form-group">
            <label for="address_search">Enter a postcode:</label>
            <input type="text" name="address_search" ng-model="addresses.search" class="form-control" placeholder="e.g. GU2 4BB">
        </div>
        <button type="submit" class="btn btn-primary">Search</button>
    </form>
    <div ng-cloak>
      <div class="columns large-9">
        <div ng-show="addresses.isShowMessage" data-alert class="alert alert-warning alert-dismissible" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          No addresses could be found.
        </div>
      </div>
      <table class="table table-striped" ng-show="addresses.data.length > 0">
        <thead>
            <tr>
            <th>Property</th>
            <th>Street</th>
            <th>Town</th>
            <th>Area</th>
            <th>Postcode</th>
            <th>UPRN</th>
            </tr>
        </thead>
        <tbody>
            <tr ng-repeat="address in addresses.data">
            <td>{{ address.property }}</td>
            <td>{{ address.street }}</td>
            <td>{{ address.town }}</td>
            <td>{{ address.area }}</td>
            <td>{{ address.postcode }}</td>
            <td>{{ address.uprn }}</td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
{% endraw %}


<p class="lead">
    The Surrey Digital Services Addresses service supports address lookups. See the <a href="{{ site.baseurl }}/documentation.html">docs</a> for more information.
</p>