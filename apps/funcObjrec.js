function words(sentence) {
       var counts = {};
       sentence.split(/\s+/ ).forEach(function (w) {
           if (w in counts) {
               // enable us handle string that are method name
               if (typeof counts[w] == 'function') {
                   // convert                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                   counts[w] = 1;
               } else {
                   counts[w]++;
               }
           }
           else {
               counts[w] = 1;