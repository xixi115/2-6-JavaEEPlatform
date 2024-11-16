/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 13.0, "minX": 0.0, "maxY": 447.0, "series": [{"data": [[0.0, 13.0], [0.1, 17.0], [0.2, 24.0], [0.3, 27.0], [0.4, 27.0], [0.5, 29.0], [0.6, 29.0], [0.7, 29.0], [0.8, 30.0], [0.9, 31.0], [1.0, 31.0], [1.1, 31.0], [1.2, 33.0], [1.3, 35.0], [1.4, 36.0], [1.5, 38.0], [1.6, 38.0], [1.7, 41.0], [1.8, 43.0], [1.9, 44.0], [2.0, 44.0], [2.1, 46.0], [2.2, 47.0], [2.3, 47.0], [2.4, 48.0], [2.5, 49.0], [2.6, 50.0], [2.7, 50.0], [2.8, 52.0], [2.9, 52.0], [3.0, 53.0], [3.1, 54.0], [3.2, 54.0], [3.3, 55.0], [3.4, 55.0], [3.5, 55.0], [3.6, 55.0], [3.7, 55.0], [3.8, 56.0], [3.9, 57.0], [4.0, 57.0], [4.1, 57.0], [4.2, 57.0], [4.3, 58.0], [4.4, 58.0], [4.5, 58.0], [4.6, 58.0], [4.7, 58.0], [4.8, 59.0], [4.9, 59.0], [5.0, 60.0], [5.1, 60.0], [5.2, 60.0], [5.3, 61.0], [5.4, 61.0], [5.5, 61.0], [5.6, 61.0], [5.7, 61.0], [5.8, 62.0], [5.9, 62.0], [6.0, 62.0], [6.1, 62.0], [6.2, 63.0], [6.3, 63.0], [6.4, 63.0], [6.5, 64.0], [6.6, 64.0], [6.7, 64.0], [6.8, 64.0], [6.9, 65.0], [7.0, 65.0], [7.1, 65.0], [7.2, 65.0], [7.3, 66.0], [7.4, 66.0], [7.5, 66.0], [7.6, 66.0], [7.7, 67.0], [7.8, 67.0], [7.9, 67.0], [8.0, 67.0], [8.1, 68.0], [8.2, 68.0], [8.3, 68.0], [8.4, 68.0], [8.5, 68.0], [8.6, 68.0], [8.7, 69.0], [8.8, 69.0], [8.9, 69.0], [9.0, 69.0], [9.1, 70.0], [9.2, 70.0], [9.3, 70.0], [9.4, 70.0], [9.5, 70.0], [9.6, 70.0], [9.7, 71.0], [9.8, 71.0], [9.9, 71.0], [10.0, 71.0], [10.1, 71.0], [10.2, 72.0], [10.3, 72.0], [10.4, 72.0], [10.5, 72.0], [10.6, 72.0], [10.7, 72.0], [10.8, 73.0], [10.9, 73.0], [11.0, 73.0], [11.1, 73.0], [11.2, 73.0], [11.3, 73.0], [11.4, 74.0], [11.5, 74.0], [11.6, 74.0], [11.7, 74.0], [11.8, 74.0], [11.9, 74.0], [12.0, 75.0], [12.1, 75.0], [12.2, 75.0], [12.3, 75.0], [12.4, 75.0], [12.5, 75.0], [12.6, 75.0], [12.7, 75.0], [12.8, 76.0], [12.9, 76.0], [13.0, 76.0], [13.1, 76.0], [13.2, 76.0], [13.3, 76.0], [13.4, 76.0], [13.5, 77.0], [13.6, 77.0], [13.7, 77.0], [13.8, 77.0], [13.9, 77.0], [14.0, 77.0], [14.1, 77.0], [14.2, 77.0], [14.3, 78.0], [14.4, 78.0], [14.5, 78.0], [14.6, 78.0], [14.7, 79.0], [14.8, 79.0], [14.9, 79.0], [15.0, 79.0], [15.1, 80.0], [15.2, 80.0], [15.3, 80.0], [15.4, 80.0], [15.5, 81.0], [15.6, 81.0], [15.7, 81.0], [15.8, 82.0], [15.9, 82.0], [16.0, 82.0], [16.1, 82.0], [16.2, 82.0], [16.3, 83.0], [16.4, 83.0], [16.5, 83.0], [16.6, 83.0], [16.7, 83.0], [16.8, 83.0], [16.9, 84.0], [17.0, 84.0], [17.1, 84.0], [17.2, 84.0], [17.3, 85.0], [17.4, 85.0], [17.5, 85.0], [17.6, 85.0], [17.7, 85.0], [17.8, 85.0], [17.9, 85.0], [18.0, 86.0], [18.1, 86.0], [18.2, 86.0], [18.3, 86.0], [18.4, 86.0], [18.5, 87.0], [18.6, 87.0], [18.7, 87.0], [18.8, 87.0], [18.9, 87.0], [19.0, 87.0], [19.1, 87.0], [19.2, 88.0], [19.3, 88.0], [19.4, 88.0], [19.5, 88.0], [19.6, 88.0], [19.7, 89.0], [19.8, 89.0], [19.9, 89.0], [20.0, 89.0], [20.1, 89.0], [20.2, 89.0], [20.3, 90.0], [20.4, 90.0], [20.5, 90.0], [20.6, 90.0], [20.7, 91.0], [20.8, 91.0], [20.9, 91.0], [21.0, 92.0], [21.1, 92.0], [21.2, 92.0], [21.3, 92.0], [21.4, 92.0], [21.5, 93.0], [21.6, 93.0], [21.7, 93.0], [21.8, 93.0], [21.9, 93.0], [22.0, 93.0], [22.1, 94.0], [22.2, 94.0], [22.3, 94.0], [22.4, 94.0], [22.5, 94.0], [22.6, 94.0], [22.7, 94.0], [22.8, 95.0], [22.9, 95.0], [23.0, 95.0], [23.1, 95.0], [23.2, 95.0], [23.3, 95.0], [23.4, 95.0], [23.5, 95.0], [23.6, 95.0], [23.7, 96.0], [23.8, 96.0], [23.9, 96.0], [24.0, 96.0], [24.1, 97.0], [24.2, 97.0], [24.3, 97.0], [24.4, 97.0], [24.5, 97.0], [24.6, 97.0], [24.7, 98.0], [24.8, 98.0], [24.9, 98.0], [25.0, 98.0], [25.1, 98.0], [25.2, 98.0], [25.3, 98.0], [25.4, 99.0], [25.5, 99.0], [25.6, 99.0], [25.7, 99.0], [25.8, 99.0], [25.9, 100.0], [26.0, 100.0], [26.1, 100.0], [26.2, 100.0], [26.3, 100.0], [26.4, 100.0], [26.5, 101.0], [26.6, 101.0], [26.7, 101.0], [26.8, 101.0], [26.9, 101.0], [27.0, 101.0], [27.1, 101.0], [27.2, 101.0], [27.3, 102.0], [27.4, 102.0], [27.5, 102.0], [27.6, 102.0], [27.7, 102.0], [27.8, 103.0], [27.9, 103.0], [28.0, 103.0], [28.1, 103.0], [28.2, 103.0], [28.3, 103.0], [28.4, 104.0], [28.5, 104.0], [28.6, 104.0], [28.7, 104.0], [28.8, 105.0], [28.9, 105.0], [29.0, 105.0], [29.1, 105.0], [29.2, 105.0], [29.3, 106.0], [29.4, 106.0], [29.5, 106.0], [29.6, 107.0], [29.7, 107.0], [29.8, 107.0], [29.9, 107.0], [30.0, 108.0], [30.1, 108.0], [30.2, 108.0], [30.3, 108.0], [30.4, 109.0], [30.5, 109.0], [30.6, 109.0], [30.7, 109.0], [30.8, 110.0], [30.9, 110.0], [31.0, 110.0], [31.1, 110.0], [31.2, 110.0], [31.3, 111.0], [31.4, 111.0], [31.5, 111.0], [31.6, 111.0], [31.7, 111.0], [31.8, 111.0], [31.9, 112.0], [32.0, 112.0], [32.1, 112.0], [32.2, 112.0], [32.3, 112.0], [32.4, 113.0], [32.5, 113.0], [32.6, 113.0], [32.7, 113.0], [32.8, 113.0], [32.9, 113.0], [33.0, 114.0], [33.1, 114.0], [33.2, 114.0], [33.3, 114.0], [33.4, 114.0], [33.5, 114.0], [33.6, 114.0], [33.7, 114.0], [33.8, 114.0], [33.9, 114.0], [34.0, 115.0], [34.1, 115.0], [34.2, 115.0], [34.3, 115.0], [34.4, 115.0], [34.5, 115.0], [34.6, 116.0], [34.7, 116.0], [34.8, 116.0], [34.9, 116.0], [35.0, 116.0], [35.1, 116.0], [35.2, 117.0], [35.3, 117.0], [35.4, 117.0], [35.5, 117.0], [35.6, 117.0], [35.7, 117.0], [35.8, 117.0], [35.9, 117.0], [36.0, 117.0], [36.1, 117.0], [36.2, 118.0], [36.3, 118.0], [36.4, 118.0], [36.5, 118.0], [36.6, 118.0], [36.7, 118.0], [36.8, 118.0], [36.9, 118.0], [37.0, 118.0], [37.1, 119.0], [37.2, 119.0], [37.3, 119.0], [37.4, 119.0], [37.5, 119.0], [37.6, 119.0], [37.7, 119.0], [37.8, 119.0], [37.9, 119.0], [38.0, 120.0], [38.1, 120.0], [38.2, 120.0], [38.3, 120.0], [38.4, 120.0], [38.5, 120.0], [38.6, 120.0], [38.7, 120.0], [38.8, 121.0], [38.9, 121.0], [39.0, 121.0], [39.1, 121.0], [39.2, 121.0], [39.3, 121.0], [39.4, 121.0], [39.5, 121.0], [39.6, 121.0], [39.7, 121.0], [39.8, 121.0], [39.9, 122.0], [40.0, 122.0], [40.1, 122.0], [40.2, 122.0], [40.3, 122.0], [40.4, 122.0], [40.5, 122.0], [40.6, 122.0], [40.7, 122.0], [40.8, 122.0], [40.9, 122.0], [41.0, 122.0], [41.1, 123.0], [41.2, 123.0], [41.3, 123.0], [41.4, 123.0], [41.5, 123.0], [41.6, 123.0], [41.7, 123.0], [41.8, 124.0], [41.9, 124.0], [42.0, 124.0], [42.1, 124.0], [42.2, 124.0], [42.3, 124.0], [42.4, 124.0], [42.5, 124.0], [42.6, 125.0], [42.7, 125.0], [42.8, 125.0], [42.9, 125.0], [43.0, 125.0], [43.1, 125.0], [43.2, 125.0], [43.3, 125.0], [43.4, 125.0], [43.5, 125.0], [43.6, 126.0], [43.7, 126.0], [43.8, 126.0], [43.9, 126.0], [44.0, 126.0], [44.1, 126.0], [44.2, 126.0], [44.3, 127.0], [44.4, 127.0], [44.5, 127.0], [44.6, 127.0], [44.7, 127.0], [44.8, 127.0], [44.9, 127.0], [45.0, 127.0], [45.1, 128.0], [45.2, 128.0], [45.3, 128.0], [45.4, 128.0], [45.5, 128.0], [45.6, 128.0], [45.7, 128.0], [45.8, 128.0], [45.9, 128.0], [46.0, 129.0], [46.1, 129.0], [46.2, 129.0], [46.3, 129.0], [46.4, 129.0], [46.5, 129.0], [46.6, 129.0], [46.7, 129.0], [46.8, 129.0], [46.9, 129.0], [47.0, 130.0], [47.1, 130.0], [47.2, 130.0], [47.3, 130.0], [47.4, 130.0], [47.5, 130.0], [47.6, 130.0], [47.7, 130.0], [47.8, 130.0], [47.9, 130.0], [48.0, 131.0], [48.1, 131.0], [48.2, 131.0], [48.3, 131.0], [48.4, 131.0], [48.5, 131.0], [48.6, 131.0], [48.7, 131.0], [48.8, 132.0], [48.9, 132.0], [49.0, 132.0], [49.1, 132.0], [49.2, 132.0], [49.3, 132.0], [49.4, 132.0], [49.5, 132.0], [49.6, 133.0], [49.7, 133.0], [49.8, 133.0], [49.9, 133.0], [50.0, 133.0], [50.1, 133.0], [50.2, 133.0], [50.3, 133.0], [50.4, 133.0], [50.5, 134.0], [50.6, 134.0], [50.7, 134.0], [50.8, 134.0], [50.9, 135.0], [51.0, 135.0], [51.1, 135.0], [51.2, 135.0], [51.3, 135.0], [51.4, 135.0], [51.5, 135.0], [51.6, 135.0], [51.7, 135.0], [51.8, 136.0], [51.9, 136.0], [52.0, 136.0], [52.1, 136.0], [52.2, 136.0], [52.3, 136.0], [52.4, 136.0], [52.5, 137.0], [52.6, 137.0], [52.7, 137.0], [52.8, 137.0], [52.9, 137.0], [53.0, 137.0], [53.1, 137.0], [53.2, 137.0], [53.3, 138.0], [53.4, 138.0], [53.5, 138.0], [53.6, 139.0], [53.7, 139.0], [53.8, 139.0], [53.9, 139.0], [54.0, 139.0], [54.1, 139.0], [54.2, 139.0], [54.3, 139.0], [54.4, 139.0], [54.5, 139.0], [54.6, 140.0], [54.7, 140.0], [54.8, 140.0], [54.9, 140.0], [55.0, 140.0], [55.1, 140.0], [55.2, 140.0], [55.3, 141.0], [55.4, 141.0], [55.5, 141.0], [55.6, 141.0], [55.7, 141.0], [55.8, 141.0], [55.9, 142.0], [56.0, 142.0], [56.1, 142.0], [56.2, 143.0], [56.3, 143.0], [56.4, 143.0], [56.5, 143.0], [56.6, 143.0], [56.7, 143.0], [56.8, 143.0], [56.9, 144.0], [57.0, 144.0], [57.1, 144.0], [57.2, 144.0], [57.3, 145.0], [57.4, 145.0], [57.5, 145.0], [57.6, 145.0], [57.7, 145.0], [57.8, 145.0], [57.9, 145.0], [58.0, 145.0], [58.1, 145.0], [58.2, 146.0], [58.3, 146.0], [58.4, 146.0], [58.5, 146.0], [58.6, 146.0], [58.7, 146.0], [58.8, 147.0], [58.9, 147.0], [59.0, 147.0], [59.1, 147.0], [59.2, 147.0], [59.3, 147.0], [59.4, 147.0], [59.5, 147.0], [59.6, 147.0], [59.7, 148.0], [59.8, 148.0], [59.9, 148.0], [60.0, 148.0], [60.1, 148.0], [60.2, 148.0], [60.3, 148.0], [60.4, 148.0], [60.5, 149.0], [60.6, 149.0], [60.7, 149.0], [60.8, 149.0], [60.9, 149.0], [61.0, 149.0], [61.1, 149.0], [61.2, 150.0], [61.3, 150.0], [61.4, 150.0], [61.5, 150.0], [61.6, 150.0], [61.7, 151.0], [61.8, 151.0], [61.9, 151.0], [62.0, 151.0], [62.1, 152.0], [62.2, 152.0], [62.3, 152.0], [62.4, 152.0], [62.5, 152.0], [62.6, 152.0], [62.7, 152.0], [62.8, 152.0], [62.9, 152.0], [63.0, 152.0], [63.1, 153.0], [63.2, 153.0], [63.3, 153.0], [63.4, 153.0], [63.5, 153.0], [63.6, 153.0], [63.7, 154.0], [63.8, 154.0], [63.9, 154.0], [64.0, 154.0], [64.1, 154.0], [64.2, 154.0], [64.3, 155.0], [64.4, 155.0], [64.5, 155.0], [64.6, 155.0], [64.7, 155.0], [64.8, 155.0], [64.9, 155.0], [65.0, 156.0], [65.1, 156.0], [65.2, 156.0], [65.3, 156.0], [65.4, 156.0], [65.5, 157.0], [65.6, 157.0], [65.7, 157.0], [65.8, 157.0], [65.9, 157.0], [66.0, 157.0], [66.1, 158.0], [66.2, 158.0], [66.3, 158.0], [66.4, 158.0], [66.5, 158.0], [66.6, 158.0], [66.7, 159.0], [66.8, 159.0], [66.9, 159.0], [67.0, 159.0], [67.1, 159.0], [67.2, 160.0], [67.3, 160.0], [67.4, 160.0], [67.5, 161.0], [67.6, 161.0], [67.7, 161.0], [67.8, 161.0], [67.9, 162.0], [68.0, 162.0], [68.1, 162.0], [68.2, 163.0], [68.3, 163.0], [68.4, 163.0], [68.5, 163.0], [68.6, 164.0], [68.7, 164.0], [68.8, 164.0], [68.9, 164.0], [69.0, 164.0], [69.1, 165.0], [69.2, 165.0], [69.3, 165.0], [69.4, 165.0], [69.5, 165.0], [69.6, 166.0], [69.7, 166.0], [69.8, 167.0], [69.9, 167.0], [70.0, 167.0], [70.1, 168.0], [70.2, 168.0], [70.3, 168.0], [70.4, 168.0], [70.5, 168.0], [70.6, 169.0], [70.7, 170.0], [70.8, 170.0], [70.9, 170.0], [71.0, 171.0], [71.1, 171.0], [71.2, 171.0], [71.3, 172.0], [71.4, 172.0], [71.5, 172.0], [71.6, 173.0], [71.7, 174.0], [71.8, 174.0], [71.9, 174.0], [72.0, 174.0], [72.1, 175.0], [72.2, 175.0], [72.3, 175.0], [72.4, 175.0], [72.5, 175.0], [72.6, 176.0], [72.7, 176.0], [72.8, 176.0], [72.9, 177.0], [73.0, 177.0], [73.1, 177.0], [73.2, 178.0], [73.3, 178.0], [73.4, 178.0], [73.5, 178.0], [73.6, 179.0], [73.7, 179.0], [73.8, 180.0], [73.9, 180.0], [74.0, 180.0], [74.1, 180.0], [74.2, 180.0], [74.3, 181.0], [74.4, 181.0], [74.5, 181.0], [74.6, 181.0], [74.7, 182.0], [74.8, 182.0], [74.9, 182.0], [75.0, 182.0], [75.1, 183.0], [75.2, 183.0], [75.3, 183.0], [75.4, 183.0], [75.5, 183.0], [75.6, 184.0], [75.7, 184.0], [75.8, 184.0], [75.9, 185.0], [76.0, 185.0], [76.1, 185.0], [76.2, 185.0], [76.3, 186.0], [76.4, 186.0], [76.5, 187.0], [76.6, 187.0], [76.7, 188.0], [76.8, 188.0], [76.9, 188.0], [77.0, 188.0], [77.1, 189.0], [77.2, 189.0], [77.3, 190.0], [77.4, 190.0], [77.5, 190.0], [77.6, 190.0], [77.7, 191.0], [77.8, 191.0], [77.9, 191.0], [78.0, 191.0], [78.1, 192.0], [78.2, 192.0], [78.3, 192.0], [78.4, 192.0], [78.5, 192.0], [78.6, 193.0], [78.7, 193.0], [78.8, 193.0], [78.9, 193.0], [79.0, 194.0], [79.1, 194.0], [79.2, 194.0], [79.3, 195.0], [79.4, 195.0], [79.5, 195.0], [79.6, 195.0], [79.7, 195.0], [79.8, 195.0], [79.9, 196.0], [80.0, 196.0], [80.1, 196.0], [80.2, 196.0], [80.3, 196.0], [80.4, 197.0], [80.5, 197.0], [80.6, 197.0], [80.7, 197.0], [80.8, 197.0], [80.9, 197.0], [81.0, 198.0], [81.1, 198.0], [81.2, 198.0], [81.3, 198.0], [81.4, 199.0], [81.5, 199.0], [81.6, 199.0], [81.7, 199.0], [81.8, 200.0], [81.9, 200.0], [82.0, 200.0], [82.1, 200.0], [82.2, 200.0], [82.3, 200.0], [82.4, 200.0], [82.5, 200.0], [82.6, 201.0], [82.7, 201.0], [82.8, 201.0], [82.9, 201.0], [83.0, 201.0], [83.1, 202.0], [83.2, 202.0], [83.3, 202.0], [83.4, 202.0], [83.5, 203.0], [83.6, 203.0], [83.7, 203.0], [83.8, 203.0], [83.9, 203.0], [84.0, 203.0], [84.1, 203.0], [84.2, 204.0], [84.3, 204.0], [84.4, 204.0], [84.5, 204.0], [84.6, 205.0], [84.7, 205.0], [84.8, 205.0], [84.9, 205.0], [85.0, 205.0], [85.1, 206.0], [85.2, 206.0], [85.3, 206.0], [85.4, 206.0], [85.5, 206.0], [85.6, 206.0], [85.7, 206.0], [85.8, 207.0], [85.9, 207.0], [86.0, 207.0], [86.1, 208.0], [86.2, 208.0], [86.3, 208.0], [86.4, 208.0], [86.5, 208.0], [86.6, 209.0], [86.7, 209.0], [86.8, 209.0], [86.9, 210.0], [87.0, 210.0], [87.1, 210.0], [87.2, 211.0], [87.3, 211.0], [87.4, 211.0], [87.5, 211.0], [87.6, 212.0], [87.7, 212.0], [87.8, 212.0], [87.9, 212.0], [88.0, 212.0], [88.1, 212.0], [88.2, 212.0], [88.3, 213.0], [88.4, 213.0], [88.5, 213.0], [88.6, 213.0], [88.7, 214.0], [88.8, 214.0], [88.9, 215.0], [89.0, 215.0], [89.1, 215.0], [89.2, 216.0], [89.3, 216.0], [89.4, 216.0], [89.5, 217.0], [89.6, 217.0], [89.7, 218.0], [89.8, 218.0], [89.9, 218.0], [90.0, 218.0], [90.1, 218.0], [90.2, 219.0], [90.3, 219.0], [90.4, 219.0], [90.5, 219.0], [90.6, 220.0], [90.7, 220.0], [90.8, 220.0], [90.9, 221.0], [91.0, 221.0], [91.1, 221.0], [91.2, 221.0], [91.3, 222.0], [91.4, 222.0], [91.5, 222.0], [91.6, 223.0], [91.7, 223.0], [91.8, 224.0], [91.9, 224.0], [92.0, 224.0], [92.1, 225.0], [92.2, 225.0], [92.3, 226.0], [92.4, 226.0], [92.5, 226.0], [92.6, 226.0], [92.7, 227.0], [92.8, 227.0], [92.9, 227.0], [93.0, 227.0], [93.1, 228.0], [93.2, 228.0], [93.3, 228.0], [93.4, 229.0], [93.5, 229.0], [93.6, 229.0], [93.7, 229.0], [93.8, 230.0], [93.9, 230.0], [94.0, 230.0], [94.1, 231.0], [94.2, 232.0], [94.3, 232.0], [94.4, 233.0], [94.5, 233.0], [94.6, 233.0], [94.7, 234.0], [94.8, 235.0], [94.9, 235.0], [95.0, 235.0], [95.1, 236.0], [95.2, 236.0], [95.3, 236.0], [95.4, 237.0], [95.5, 237.0], [95.6, 238.0], [95.7, 238.0], [95.8, 239.0], [95.9, 239.0], [96.0, 240.0], [96.1, 240.0], [96.2, 240.0], [96.3, 241.0], [96.4, 242.0], [96.5, 242.0], [96.6, 243.0], [96.7, 245.0], [96.8, 247.0], [96.9, 248.0], [97.0, 248.0], [97.1, 251.0], [97.2, 251.0], [97.3, 252.0], [97.4, 253.0], [97.5, 255.0], [97.6, 255.0], [97.7, 255.0], [97.8, 257.0], [97.9, 259.0], [98.0, 259.0], [98.1, 261.0], [98.2, 262.0], [98.3, 264.0], [98.4, 265.0], [98.5, 267.0], [98.6, 269.0], [98.7, 270.0], [98.8, 273.0], [98.9, 277.0], [99.0, 278.0], [99.1, 280.0], [99.2, 282.0], [99.3, 289.0], [99.4, 291.0], [99.5, 292.0], [99.6, 295.0], [99.7, 312.0], [99.8, 353.0], [99.9, 415.0], [100.0, 447.0]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 1341.0, "series": [{"data": [[0.0, 621.0], [300.0, 6.0], [100.0, 1341.0], [200.0, 429.0], [400.0, 3.0]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2400.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2400.0, "series": [{"data": [[0.0, 2400.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 15.447513812154698, "minX": 1.731722864E12, "maxY": 62.13636363636362, "series": [{"data": [[1.731722868E12, 35.6293436293436], [1.731722867E12, 40.07003891050586], [1.731722869E12, 32.737254901960775], [1.731722865E12, 55.97348484848484], [1.731722866E12, 48.64615384615385], [1.731722873E12, 15.447513812154698], [1.731722864E12, 62.13636363636362], [1.73172287E12, 29.929133858267708], [1.731722872E12, 20.308593750000018], [1.731722871E12, 24.761538461538464]], "isOverall": false, "label": "线程组", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.731722873E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 13.0, "minX": 1.0, "maxY": 262.6842105263158, "series": [{"data": [[2.0, 27.0], [3.0, 38.0], [4.0, 31.0], [6.0, 50.0], [8.0, 55.0], [9.0, 73.0], [10.0, 66.0], [12.0, 82.33333333333333], [13.0, 70.0], [14.0, 57.24999999999999], [15.0, 61.21621621621622], [16.0, 62.82926829268294], [17.0, 65.5], [18.0, 69.54838709677418], [19.0, 76.49206349206351], [20.0, 79.66216216216219], [21.0, 81.85483870967744], [22.0, 78.52830188679245], [23.0, 90.4423076923077], [24.0, 96.03921568627452], [25.0, 96.4142857142857], [26.0, 96.65909090909093], [27.0, 111.18918918918918], [28.0, 109.13157894736841], [29.0, 112.21428571428571], [30.0, 118.12048192771084], [31.0, 125.52380952380952], [33.0, 128.06086956521733], [32.0, 126.41984732824422], [35.0, 138.23913043478265], [34.0, 130.8235294117646], [37.0, 146.85507246376815], [36.0, 138.56603773584908], [39.0, 152.06944444444443], [38.0, 145.64285714285714], [41.0, 149.78125000000006], [40.0, 157.52459016393445], [43.0, 178.0], [42.0, 175.0], [45.0, 158.60000000000002], [44.0, 162.35714285714286], [47.0, 186.33333333333334], [46.0, 184.69444444444449], [49.0, 193.36000000000004], [48.0, 184.76470588235298], [51.0, 197.8157894736842], [50.0, 196.4117647058824], [52.0, 204.52631578947364], [53.0, 208.10416666666669], [54.0, 215.85106382978722], [55.0, 213.22807017543852], [56.0, 219.68421052631575], [57.0, 222.4], [58.0, 262.6842105263158], [59.0, 243.96153846153845], [61.0, 249.91304347826085], [60.0, 238.45], [62.0, 236.5806451612903], [63.0, 225.56250000000003], [64.0, 236.81249999999997], [65.0, 239.39999999999998], [67.0, 233.75], [66.0, 214.77777777777777], [68.0, 204.44444444444446], [70.0, 210.0], [71.0, 179.16666666666669], [69.0, 191.0], [72.0, 150.625], [1.0, 13.0]], "isOverall": false, "label": "Products", "isController": false}, {"data": [[36.20958333333324, 140.67874999999995]], "isOverall": false, "label": "Products-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 72.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 38053.0, "minX": 1.731722864E12, "maxY": 499802.0, "series": [{"data": [[1.731722868E12, 493120.0], [1.731722867E12, 490116.0], [1.731722869E12, 479331.0], [1.731722865E12, 499802.0], [1.731722866E12, 494950.0], [1.731722873E12, 345443.0], [1.731722864E12, 294836.0], [1.73172287E12, 488279.0], [1.731722872E12, 493760.0], [1.731722871E12, 484977.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.731722868E12, 64552.0], [1.731722867E12, 64257.0], [1.731722869E12, 63624.0], [1.731722865E12, 65980.0], [1.731722866E12, 64738.0], [1.731722873E12, 45355.0], [1.731722864E12, 38053.0], [1.73172287E12, 63392.0], [1.731722872E12, 63600.0], [1.731722871E12, 64815.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.731722873E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 62.779005524861844, "minX": 1.731722864E12, "maxY": 232.67532467532465, "series": [{"data": [[1.731722868E12, 139.59845559845567], [1.731722867E12, 156.0583657587548], [1.731722869E12, 128.89411764705878], [1.731722865E12, 216.4772727272727], [1.731722866E12, 189.39230769230778], [1.731722873E12, 62.779005524861844], [1.731722864E12, 232.67532467532465], [1.73172287E12, 116.52755905511806], [1.731722872E12, 79.18359374999997], [1.731722871E12, 96.31538461538459]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.731722873E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 62.76795580110493, "minX": 1.731722864E12, "maxY": 232.6103896103896, "series": [{"data": [[1.731722868E12, 139.5945945945946], [1.731722867E12, 156.02723735408577], [1.731722869E12, 128.88235294117652], [1.731722865E12, 216.44318181818187], [1.731722866E12, 189.28461538461545], [1.731722873E12, 62.76795580110493], [1.731722864E12, 232.6103896103896], [1.73172287E12, 116.50000000000001], [1.731722872E12, 79.17578124999996], [1.731722871E12, 96.30384615384608]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.731722873E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.2500000000000001, "minX": 1.731722864E12, "maxY": 5.863636363636362, "series": [{"data": [[1.731722868E12, 0.32046332046332054], [1.731722867E12, 0.35019455252918286], [1.731722869E12, 0.35686274509803906], [1.731722865E12, 0.4999999999999999], [1.731722866E12, 0.4269230769230768], [1.731722873E12, 0.2541436464088396], [1.731722864E12, 5.863636363636362], [1.73172287E12, 0.27952755905511834], [1.731722872E12, 0.2500000000000001], [1.731722871E12, 0.28461538461538427]], "isOverall": false, "label": "Products", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.731722873E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 13.0, "minX": 1.731722864E12, "maxY": 447.0, "series": [{"data": [[1.731722868E12, 258.0], [1.731722867E12, 302.0], [1.731722869E12, 232.0], [1.731722865E12, 447.0], [1.731722866E12, 353.0], [1.731722873E12, 93.0], [1.731722864E12, 433.0], [1.73172287E12, 227.0], [1.731722872E12, 127.0], [1.731722871E12, 189.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.731722868E12, 159.0], [1.731722867E12, 176.20000000000002], [1.731722869E12, 145.0], [1.731722865E12, 235.5], [1.731722866E12, 206.9], [1.731722873E12, 79.0], [1.731722864E12, 277.5], [1.73172287E12, 135.0], [1.731722872E12, 101.0], [1.731722871E12, 113.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.731722868E12, 230.79999999999984], [1.731722867E12, 279.67999999999995], [1.731722869E12, 214.51999999999998], [1.731722865E12, 401.3500000000005], [1.731722866E12, 334.0899999999996], [1.731722873E12, 92.18], [1.731722864E12, 357.09999999999843], [1.73172287E12, 207.19999999999982], [1.731722872E12, 126.43], [1.731722871E12, 165.33999999999992]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.731722868E12, 164.0], [1.731722867E12, 183.0], [1.731722869E12, 152.0], [1.731722865E12, 240.75], [1.731722866E12, 224.0], [1.731722873E12, 83.0], [1.731722864E12, 290.25], [1.73172287E12, 147.0], [1.731722872E12, 111.14999999999998], [1.731722871E12, 119.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.731722868E12, 27.0], [1.731722867E12, 30.0], [1.731722869E12, 28.0], [1.731722865E12, 31.0], [1.731722866E12, 27.0], [1.731722873E12, 13.0], [1.731722864E12, 17.0], [1.73172287E12, 23.0], [1.731722872E12, 29.0], [1.731722871E12, 24.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.731722868E12, 139.0], [1.731722867E12, 155.0], [1.731722869E12, 128.0], [1.731722865E12, 213.0], [1.731722866E12, 190.0], [1.731722873E12, 63.0], [1.731722864E12, 238.0], [1.73172287E12, 117.0], [1.731722872E12, 77.0], [1.731722871E12, 95.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.731722873E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 63.0, "minX": 154.0, "maxY": 238.0, "series": [{"data": [[264.0, 213.0], [260.0, 154.5], [257.0, 155.0], [259.0, 139.0], [256.0, 77.0], [154.0, 238.0], [181.0, 63.0], [255.0, 128.0], [254.0, 117.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 264.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 63.0, "minX": 154.0, "maxY": 238.0, "series": [{"data": [[264.0, 213.0], [260.0, 154.5], [257.0, 155.0], [259.0, 139.0], [256.0, 77.0], [154.0, 238.0], [181.0, 63.0], [255.0, 128.0], [254.0, 117.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 264.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 162.0, "minX": 1.731722864E12, "maxY": 256.0, "series": [{"data": [[1.731722868E12, 250.0], [1.731722867E12, 252.0], [1.731722869E12, 256.0], [1.731722865E12, 255.0], [1.731722866E12, 254.0], [1.731722873E12, 162.0], [1.731722864E12, 214.0], [1.73172287E12, 249.0], [1.731722872E12, 254.0], [1.731722871E12, 254.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.731722873E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 154.0, "minX": 1.731722864E12, "maxY": 264.0, "series": [{"data": [[1.731722868E12, 259.0], [1.731722867E12, 257.0], [1.731722869E12, 255.0], [1.731722865E12, 264.0], [1.731722866E12, 260.0], [1.731722873E12, 181.0], [1.731722864E12, 154.0], [1.73172287E12, 254.0], [1.731722872E12, 256.0], [1.731722871E12, 260.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.731722873E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 154.0, "minX": 1.731722864E12, "maxY": 264.0, "series": [{"data": [[1.731722868E12, 259.0], [1.731722867E12, 257.0], [1.731722869E12, 255.0], [1.731722865E12, 264.0], [1.731722866E12, 260.0], [1.731722873E12, 181.0], [1.731722864E12, 154.0], [1.73172287E12, 254.0], [1.731722872E12, 256.0], [1.731722871E12, 260.0]], "isOverall": false, "label": "Products-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.731722873E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 154.0, "minX": 1.731722864E12, "maxY": 264.0, "series": [{"data": [[1.731722868E12, 259.0], [1.731722867E12, 257.0], [1.731722869E12, 255.0], [1.731722865E12, 264.0], [1.731722866E12, 260.0], [1.731722873E12, 181.0], [1.731722864E12, 154.0], [1.73172287E12, 254.0], [1.731722872E12, 256.0], [1.731722871E12, 260.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.731722873E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

