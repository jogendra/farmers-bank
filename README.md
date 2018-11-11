<img src="/Static/logo/icon.png" align="left" hspace="1" vspace="1" height="150" width="150">

# Farmers Bank

Application for selling and buying crops for farmers using HyperLedger technology.

---

## Developers and Maintainers
The project is developed and maintained by
- Jogendra Kumar ([jogendra](https://github.com/jogendra))
<table>
<tr>
<td>
  <img src="https://avatars1.githubusercontent.com/u/20956124?s=150&v=4"/>

     Jogendra Kumar

<p align="center">
<a href = "https://github.com/jogendra"><img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36"/></a>
<a href = "https://twitter.com/imjog24"><img src = "https://www.shareicon.net/download/2016/07/06/107115_media.svg" width="36" height="36"/></a>
<a href = "https://www.linkedin.com/in/jogendrasingh24/"><img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36"/></a>
</p>
</td>
</tr>
</table>

# Instructions to run

- Clone the repo `git clone https://github.com/jogendra/farmers-bank.git`
## Running the API Backend
- Goto the API directory
- First install the [Hyperledger composer](https://hyperledger.github.io/composer/latest/installing/installing-prereqs.html). Then install the [development environment](https://hyperledger.github.io/composer/latest/installing/development-tools.html).
- `composer archive create -t dir -n .`
- `composer network install --card PeerAdmin@hlfv1 --archiveFile api@0.0.1.bna`
- `composer network start --networkName api --networkVersion 0.0.1 --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --file networkadmin.card`
- `composer card import --file networkadmin.card`
- `composer-rest-server -c admin@api -n always -u true -d y -w true`
- Goto `http://localhost:3000/explorer` to explored the REST API

# Running the Front end
- Make sure you are running the API Backend
- Open the `index.html` file
- The front end is up and running

## License

This project is available under the MIT license. See the [LICENSE](LICENSE) file for more info.
