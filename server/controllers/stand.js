const db = require("../models");

module.exports = {
  get: async (req, res) => {

    let response = {
      options: {
        plates: [],
        holders: []
      },
      images: {
        plateImg: {},
        holderImg: {}
      }
    };
    
    await db.plate.findAll()
      .then(plates => {
        // response.plates = plates;
        for (let plate of plates) {
          
          // 받침대 옵션 정보
          let plateOption = {
            id: plate.dataValues.id,
            type: 'plate',
            option: plate.dataValues.plateMaterial,
            price: plate.dataValues.platePrice
          };

          response.options.plates.push(plateOption);

          // 받침대 옵션 이미지
          response.images.plateImg[plate.dataValues.plateMaterial] = plate.dataValues.plateImage.toString();
        }

      })
      .catch(e => {
        console.log(`find all plates error ${e}`)
      });

    await db.holder.findAll()
      .then(holders => {
        // 홀더 옵션 배열 (중복X)
        let holderTypes = ['NONE'];
        // 초기옵션 (아무것도 없는 상태)
        response.options.holders.push({
          id: 1,
          type: 'holder',
          option: 'NONE',
          price: 0
        })

        for (let holder of holders) {
          
          // 중복방지 조건
          if (!holderTypes.includes(holder.dataValues.holderType)) {
            holderTypes.push(holder.dataValues.holderType);

            // 홀더 옵션 정보
            let holderOption = {
              id: response.options.holders.length,
              type: 'holder',
              option: holder.dataValues.holderType,
              price: holder.dataValues.holderPrice
            };

            response.options.holders.push(holderOption)
          }


          
        }
      })
      .catch(e => {
        console.log(`find all holders error ${e}`)
      });

      console.log(response.options.holders)
    res.status(200).json(response);

  }
}