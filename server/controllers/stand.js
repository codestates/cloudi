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
          
          // 홀더 옵션 중복방지 조건
          if (!holderTypes.includes(holder.dataValues.holderType)) {
            holderTypes.push(holder.dataValues.holderType);

            // 홀더 옵션 정보
            let holderOption = {
              id: response.options.holders.length + 1,
              type: 'holder',
              option: holder.dataValues.holderType,
              price: holder.dataValues.holderPrice
            };

            response.options.holders.push(holderOption)
          }

          // 홀더 옵션 이미지
          if (!(holder.dataValues.holderMaterial in response.images.holderImg)) {
            response.images.holderImg[holder.dataValues.holderMaterial] = {};
          }

          response.images.holderImg[holder.dataValues.holderMaterial][holder.dataValues.holderType] = holder.dataValues.holderImage.toString();
        }
      })
      .catch(e => {
        console.log(`find all holders error ${e}`)
      });

    res.status(200).json(response);
  },
  post: async (req, res) => {
    await db.stand.findAll({
      where: {
        userId: req.body.userId,
        standPrice: req.body.userId,
        standPlate: req.body.standPlate,
        standHolder: req.body.standHolder,
        standText: req.body.standText
      }
    })
    .then (data => {
      if (data.length === 0) {
        const newStand = {
          userId: req.body.userId,
          standQuantity: 1,
          standPrice: req.body.standPrice,
          standImage: req.body.standImage,
          standPlate: req.body.standPlate,
          standHolder: req.body.standHolder,
          standText: req.body.standText
        }

        db.stand.create(newStand)
          .then (createdData => {
            res.status(200).json(createdData.dataValues);
          })
      } else {
        res.status(400).send('이미 존재하는 스탠드 입니다.')
      }
    })
  }
}