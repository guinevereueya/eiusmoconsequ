/**
 * @classdesc This class represents a specialized component.
 * It extends the `Neo.controller.Component` class to provide additional functionality.
 *
 * @extends Neo.controller.Component
 */
class SpecializedComponent extends Neo.controller.Component {
    constructor(spec, normParams) {
        super(spec, normParams);
    }

    /**
     * Override the `mapLayerOrUnit` method to provide additional functionality.
     * 
     * @param {Object} spec - The specification object.
     * @param {Object} normParams - Normalized parameters.
     * @returns {void}
     */
    mapLayerOrUnit(spec, normParams) {
        return super.mapLayerOrUnit(spec, normParams);
    }
}
