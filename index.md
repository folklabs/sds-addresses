---
layout: page
title: Addresses
description: 
keywords: 
---

<p class="lead">Surrey Digital Services have set up an address lookup API using <a href="https://www.ordnancesurvey.co.uk/business-and-government/products/addressbase-premium.html">OS AddressBase Premium</a> and is available for use by <abbr title="Public Sector Mapping Agreement">PSMA</abbr> signatories.</p>

For more information on accessing the service please see the <a href="{{ site.baseurl }}/documentation.html">docs</a>.

## Demonstration

Use the form below to search the service.

{% raw %}
<section ng-app="addressesApp">
  <div ng-controller="AddressesController as ctl">
    <form ng-submit="addressSearch(item, $event)" class="form-inline" style="margin-bottom: 2em;">
        <div class="form-group">
            <label for="address_search">Enter a postcode:</label>
            <input type="text" name="address_search" ng-model="addresses.search" class="form-control" placeholder="e.g. GU2 4BB">
        </div>
        <button type="submit" class="btn btn-primary">Search</button>
    </form>
    <div ng-cloak>
        <div ng-show="addresses.isShowMessage" data-alert class="alert alert-{{ addresses.messageClass }}" role="alert">
            {{ addresses.message }}
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
<p class="text-muted" style="margin-top: 8em;">© Crown copyright and database rights 2016 Ordnance Survey, Surrey Digital Services. Use of this data is subject to <a href="https://www.ordnancesurvey.co.uk/business-and-government/public-sector/mapping-agreements/end-user-licence.html">terms and conditions under the Public Sector Mapping Agreement</a>. End user licences can be granted to qualifying organisations via the <a href="https://docs.google.com/forms/d/1J1gtgUgMgPaB-gSEcZQtPnefQb5ePVoqycZAHHuLRpo/viewform">token request form.</a></p>
<p class="text-muted" style="margin-top: 8em;">The Surrey Digital Services address API was forked from the <a href="https://github.com/alphagov/locate-api">Government Digital Service Locate API</a> and was configured by <a href="http://www.folklabs.com/">Folk Labs</a>.</p>
