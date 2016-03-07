---
layout: page
title: SDS Addresses
description: 
keywords: 
---

{% raw %}
<section ng-app="addressesApp" class="addresses-app">
  <div ng-controller="AddressesController as ctl">
    <h2>Find an address</h2>
    <form ng-submit="addressSearch(item, $event)" class="addresses-form">
      <label>Enter a postcode:</label>
      <div class="input-group row">
        <div class="columns large-9">
          <div class="row collapse">
            <div class="columns small-9">
              <input type="text" name="address_search" ng-model="addresses.search"/>
            </div>
            <div class="columns small-3">
              <button class="button postfix" ng-click="addressSearch(item, $event)">Search</button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div ng-cloak>
      <div class="columns large-9">
        <div ng-show="addresses.isShowMessage" data-alert class="alert-box warning round">
          No addresses could be found.
          <a href="#" class="close">&times;</a>
        </div>
      </div>
      <table ng-show="addresses.data.length > 0">
        <tr>
          <th>Property</th>
          <th>Street</th>
          <th>Town</th>
          <th>Area</th>
          <th>Postcode</th>
          <th>UPRN</th>
        </tr>
        <tr ng-repeat="address in addresses.data">
          <td>{{ address.property }}</td>
          <td>{{ address.street }}</td>
          <td>{{ address.town }}</td>
          <td>{{ address.area }}</td>
          <td>{{ address.postcode }}</td>
          <td>{{ address.uprn }}</td>
        </tr>
      </table>
    </div>
  </div>
</section>
{% endraw %}


<div class="columns large-9">
The Surrey-i Addresses service supports address lookups. See the <a href="{{ site.baseurl }}/documentation.html">docs</a> for more information.
</div>