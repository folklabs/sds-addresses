---
layout: doc_notoc
title: SDS Addresses
description: 
keywords: 
---

{% raw %}
<section ng-app="addressesApp">
  <div ng-controller="AddressesController as ctl">
    <h2>Find an address</h2>
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
    <table>
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
</section>
{% endraw %}

# SDS Addresses

This describes how to use the Surrey-i Addresses service.

