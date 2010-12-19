#Pure JavaScript uuid generation for browser and server.

Produces Base64-URI Encoded UUIDs

##USAGE: uuid(length, radix)
  length - the desired number of characters
  radix  - the number of allowable values for each character.

##EXAMPLES:

        // No arguments  - returns RFC4122, version 4 ID
        >>> Math.uuid()
        "92329D39-6F5C-4520-ABFC-AAB64544E172"

        // One argument - returns ID of the specified length
        >>> Math.uuid(15)     // 15 character ID (default base=62)
        "VcydxgltxrVZSTV"

        // Two arguments - returns ID of the specified length, and radix. (Radix must be <= 62)
        >>> Math.uuid(8, 2)  // 8 character ID (base=2)
        "01001010"
        >>> Math.uuid(8, 10) // 8 character ID (base=10)
        "47473046"
        >>> Math.uuid(8, 16) // 8 character ID (base=16)
        "098F4D35"

Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.

Edited and packaged for `npm` by Aaron Blohowiak