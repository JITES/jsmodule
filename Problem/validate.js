function valid(IP) {
    const ipParts = IP.split(".");
    const map = {};
    for (let i = 0; i < ipParts.length; i++) {
        switch (i) {
            case 0: {
                const validStart = 198;
                if (validStart == parseInt(ipParts[i])) {
                    map[i] = true;
                }
            }
            break;
            case 1:
                {
                    let cast = parseInt(ipParts[i]);
                    if (!isNaN(cast))
                        map[i] = true;
                    else
                        map[i] = false;
                }
            break;

            case 2:
                {
                    let cast = parseInt(ipParts[i]);
                    if (cast === 0)
                        map[i] = true;
                    else
                        map[i] = false;
                }
            break;

            case 3:
                {
                    let cast = parseInt(ipParts[i]);
                    if (cast >= 0 && cast <= 100)
                        map[i] = true;
                    else
                        map[i] = false;
                }
            break;

            default:
                break;
        }
    }

    const result = Object.values(map).every((v) => v === true)
    if(result)
        return 'VALID'
    else
        return 'INVALID'
}

valid('198.22.0.000');