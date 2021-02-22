/**
 * Copyright 2020 The Google Earth Engine Community Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Earth Engine Developer's Guide examples
 *   from 'Images - Image information' page
 */

// [START earthengine__images01__image_info]
// Load an image.
var image = ee.Image('LANDSAT/LC08/C01/T1/LC08_044034_20140318');

// Display all metadata.
print('All metadata:', image);

// Get information about the bands as a list.
var bandNames = image.bandNames();
print('Band names:', bandNames);  // ee.List of band names

// Get projection information from band 1.
var b1Proj = image.select('B1').projection();
print('Band 1 projection:', b1Proj);  // ee.Projection object

// Get scale (in meters) information from band 1.
var b1Scale = image.select('B1').projection().nominalScale();
print('Band 1 scale:', b1Scale);  // ee.Number

// Note that different bands can have different projections and scale.
var b8scale = image.select('B8').projection().nominalScale();
print('Band 8 scale:', b8scale);  // ee.Number

// Get a list of all metadata properties.
var properties = image.propertyNames();
print('Properties:', properties);  // ee.List of metadata properties

// Get a specific metadata property.
var cloudiness = image.get('CLOUD_COVER');
print('CLOUD_COVER:', cloudiness); // ee.Number

// Get the timestamp and convert it to a date.
var date = ee.Date(image.get('system:time_start'));
print('Timestamp:', date);  // ee.Date
// [END earthengine__images01__image_info]
