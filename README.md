<!-- PROJECT SHIELDS -->
![Build Status][build-shield]
![Contributors][contributors-shield]
[![LinkedIn][linkedin-shield]][linkedin-url]



<br />
<p align="center">
  <h1 align="center">Drive Pricer</h1>

  <p align="center">
    The cost to drive 100,000 miles can vary wildly. Estimate the cost of gas before purchasing a car.
    <br />
    <br />
    <a href="https://drivepricer.com"><strong>drivepricer.com »</strong></a>
    <br />
    <br />
  </p>
</p>



## Table of Contents

- [Table of Contents](#Table-of-Contents)
- [About The Project](#About-The-Project)
  - [Built With](#Built-With)
- [Acknowledgements](#Acknowledgements)
- [Installation](#Installation)
- [Additional Screenshots](#Additional-Screenshots)
- [License](#License)
- [Contact](#Contact)


[![Initial Splash Screen][splashscreen]](https://drivepricer.com)

## About The Project


Drive Pricer is a tool that aims to help people make informed financial decisions when purchasing a car. The standard metrics around gas mileage simply aren't useful for predicting the cost of gas for a vehicle. By estimating the fuel costs for a substantial portion of a vehicle's life, a buyer can better understand the true cost of that vehicle.

Drive Pricer's second purpose is to help people improve their environmental impact by connecting it to their pocket book.

### Built With

* [React](https://reactjs.org)
* [Gatsby.js](https://gatsbyjs.org)
* [Amazon Cloudfront](https://aws.amazon.com/cloudfront)
* [Amazon S3](https://aws.amazon.com/s3/)
* [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/)

## Acknowledgements
* [Gatsby CLI](https://www.gatsbyjs.org/docs/gatsby-cli)
* [Deploying Gatsby to s3 / Cloudfront](https://www.gatsbyjs.org/docs/deploying-to-s3-cloudfront/)
    * Note: This article's awscli installation instructions weren't too helpful on a mac. Using homebrew, `brew install awscli` was sufficient.
* [Gatsby plugin s3](https://github.com/jariz/gatsby-plugin-s3)
* [AWS Identity and Access Management](https://aws.amazon.com/iam)
* [AWS Command Line Interface](https://aws.amazon.com/cli)
* [Article that helped with s3 bucket config](https://firstclassjs.com/deploy-angular-application-to-aws-s3-and-cloudfront/)
* [Kalam Font](https://fonts.google.com/specimen/Kalam?selection.family=Kalam)
* [Audiowide Font](https://fonts.google.com/specimen/Audiowide?selection.family=Audiowide)
* [Designer of car icons (Icons were modified from original design)](https://freepik.com)
* [Distributor of car icons](https://flaticon.com)
* [Read Me Template](https://github.com/othneildrew/Best-README-Template)


## Installation

 Clone the repo
   ```sh
   git clone https:://github.com/setfloat/drivepricer.git
   ```
 Install NPM packages
   ```sh
   npm install
   ```
Develop mode runs on port 8000 and uses a less performant development build with hot reloading.
  ```JS
  npm run develop
  ```

  To run in production, you must first build the production code
    
  ```JS
  npm run build
  ```
  
  Deploying utilizes a gatsby s3 plugin to push to an s3 bucket.

  ```JS
  npm run deploy
  ```
    

## Additional Screenshots


[![Screenshot with calculated fuel costs][calcscreen]](https://drivepricer.com)





## License

This product is unlicensed. For inquiries into licensing or advertising, please contact the developer.



## Contact

Patrick Richardson - [@setfloat](https://twitter.com/setfloat) | [LinkedIn](https://linkedin.com/in/setfloat)

Project Repo: [https://github.com/setfloat/drivepricer](https://github.com/setfloat/drivepricer)

Project URL: [https://drivepricer.com](https://drivepricer.com)



<!-- MARKDOWN LINKS & IMAGES -->
[build-shield]: https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square
[contributors-shield]: https://img.shields.io/badge/contributors-1-orange.svg?style=flat-square
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/setfloat
[splashscreen]: https://raw.githubusercontent.com/setfloat/drivepricer/master/splashscreen.png
[calcscreen]: https://raw.githubusercontent.com/setfloat/drivepricer/master/calcscreen.png