## create generator folder with [banner] API

**1.** create lib/domain/mongodb/schemas/[banner-schema.js]

**2.** create lib/application/helpers/[banner-helper.js]
**3.** create lib/application/models/banner/[banner-model.js]
**4.** create lib/application/validators/[banner-validator.js]
**5.** create lib/application/use-case/[banner]/[some-use-case-file.js]

**6.** create lib/interfaces/controllers/[banner]/[banner-controllers.js]
**7.** create lib/interfaces/routes/[banner]/[banner-routes.js]

## update source

**1.** replace lib folder with generator/lib folder
**2.** run cmd git reset --hard

**3.** in lib/domain/mongodb/collections.js add collection constant [banner]

Ex: banner: "banner"

**4.** in lib/domain/mongodb/models.js
BannerModel: mongoose.model(COLLECTION.banner, require("./schemas/banner-schema"))

**5.** in app/router.js
app.use(require("../lib/interfaces/routes/banner/banner-routes.js"))
