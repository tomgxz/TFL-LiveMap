
const map_station_name = (s, line) => {
    s = s.trim()
    s = s.replace('^Heathrow$', 'Heathrow Terminals 1, 2, 3')
    s = s.replace('^Olympia$', 'Kensington (Olympia)')
    s = s.replace('^Warwick Ave$', 'Warwick Avenue')
    s = s.replace('^Camden$', 'Camden Town')
    s = s.replace('Notting Hill Ga$', 'Notting Hill Gate')
    s = s.replace('High Street Kensingt$', 'High Street Kensington')
    s = s.replace('Camden Town (20B-20A)', 'Camden Town')
    s = s.replace('Camden Town at Point 20A', 'Camden Town')
    s = s.replace('^Central$', 'Finchley Central')
    s = s.replace('\s*Platform \d+$', '')
    if (line == 'tram') s = s + ' Tram Stop'
    else if (('dlr', 'london-overground', 'elizabeth').includes(line)) pass
    else s = s + ' Station'

    s = s.replace(' & ', ' &amp; ')

    if (typeof s == String) s = s.replace('\xe2\x80\x99', "'")
    else s = s.replace('\u2019', "'")

    s = s.replace('(Bakerloo)', 'Bakerloo').replace('Earls', 'Earl\'s')
        .replace(' fast ', ' ')
        .replace('St ', 'St. ')
        .replace('Warren St.', 'Warren Street')
        .replace('Warren Station', 'Warren Street Station')
        .replace('Elephant and Castle', 'Elephant &amp; Castle')
        .replace('Elephant Station', 'Elephant &amp; Castle Station')
        .replace('Lambeth Station', 'Lambeth North Station')
        .replace('Castle and Lambeth North Station', 'Lambeth North Station')
        .replace('Castle and Kennington Station', 'Kennington Station')
        .replace('Kenntington', 'Kennington')
        .replace('Willlesden Green', 'Willesden Green')
        .replace('Chalfont Station', 'Chalfont &amp; Latimer Station')
        .replace('Chalfont and Latimer Station', 'Chalfont &amp; Latimer Station')
        .replace('West Brompon', 'West Brompton')
        .replace('Picadilly Circus', 'Piccadilly Circus')
        .replace("Queen's' Park", "Queen's Park")
        .replace('High Barent', 'High Barnet')
        .replace('Highbury &amp; Isl ', 'Highbury &amp; Islington ')
        .replace('Bartnet', 'Barnet')
        .replace('Faringdon', 'Farringdon')
        .replace('Turnham Greens', 'Turnham Green')
        .replace('Ruilsip', 'Ruislip')
        .replace('Dagemham', 'Dagenham')
        .replace('Paddington H &amp; C', 'Paddington')
        .replace('Paddington (H&C Line)-Underground Station', 'Paddington Station')
        .replace('Paddington (Suburban)', 'Paddington')
        .replace('Edgware Road (H &amp; C)', 'Edgware Road Circle')
        .replace('Edgware Road Platform 1 and 2', 'Edgware Road Circle')
        .replace('Hammersmith (Circle and H&amp;C)', 'Hammersmith')
        .replace('Hammersmith (C&amp;H)', 'Hammersmith')
        .replace('Shepherds Bush (Central Line)', "Shepherd's Bush")
        .replace('Shepherds Bush Market', "Shepherd's Bush Market")
        .replace('Terminals 123', 'Terminals 1, 2, 3')
        .replace('Terminal 1,2,3', 'Terminals 1, 2, 3')
        .replace('Woodford Junction', 'Woodford')
        .replace("King's Cross Station", "King's Cross St. Pancras Station")
        .replace("Kings Cross St. P Station", "King's Cross St. Pancras Station")
        .replace("Kings Cross St. Pancras Station", "King's Cross St. Pancras Station")
        .replace("Kings Cross Station", "King's Cross St. Pancras Station")
        .replace('Central Finchley', 'Finchley Central')
        .replace('District and Picc', 'D &amp; P')
        .replace('Finchley Central on the Southbound road', 'Finchley Central')
        .replace('South Fields', 'Southfields')
        .replace('Regents Park', "Regent's Park")
        .replace('Bromley-by-Bow', "Bromley-By-Bow")
        .replace('Brent Oak', 'Burnt Oak')
        .replace('St. Johns Wood', "St. John's Wood")
        .replace('St. John Wood', "St. John's Wood")
        .replace('Totteridge and Whetstone', 'Totteridge &amp; Whetstone')
        .replace('Newbury Park Loop', 'Newbury Park')
        .replace('ALperton', 'Alperton')
        .replace('Moor park', 'Moor Park')
        .replace('Harrow-on-the-Hill', 'Harrow on the Hill')
        .replace('Harrow-On-The-Hill', 'Harrow on the Hill')

    if (s == 'Edgware Road Station' && line == 'B') s = 'Edgware Road Bakerloo Station'
    if (s == 'Edgware Road Station' && line != 'B') s = 'Edgware Road Circle Station'

    return s
}