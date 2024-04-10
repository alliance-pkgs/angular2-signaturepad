'use strict';
var core_1 = require('@angular/core');
;
var SignaturePad = (function () {
    function SignaturePad(elementRef) {
        // no op
        this.elementRef = elementRef;
        this.options = this.options || {};
        this.onBeginEvent = new core_1.EventEmitter();
        this.onEndEvent = new core_1.EventEmitter();
    }
    SignaturePad.prototype.ngAfterContentInit = function () {
        var sp = require('signature_pad')['default'];
        var canvas = this.elementRef.nativeElement.querySelector('canvas');
        if (this.options['canvasHeight']) {
            canvas.height = this.options['canvasHeight'];
        }
        if (this.options['canvasWidth']) {
            canvas.width = this.options['canvasWidth'];
        }
        this.signaturePad = new sp(canvas, this.options);
        this.signaturePad.onBegin = this.onBegin.bind(this);
        this.signaturePad.onEnd = this.onEnd.bind(this);
    };
    SignaturePad.prototype.getCanvas = function () {
        return this.signaturePad._canvas;
    };
    SignaturePad.prototype.resizeCanvas = function () {
        // When zoomed out to less than 100%, for some very strange reason,
        // some browsers report devicePixelRatio as less than 1
        // and only part of the canvas is cleared then.
        var ratio = Math.max(window.devicePixelRatio || 1, 1);
        var canvas = this.signaturePad._canvas;
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext('2d').scale(ratio, ratio);
        this.signaturePad.clear(); // otherwise isEmpty() might return incorrect value
    };
    // Returns signature image as an array of point groups
    SignaturePad.prototype.toData = function () {
        return this.signaturePad.toData();
    };
    // Draws signature image from an array of point groups
    SignaturePad.prototype.fromData = function (points) {
        this.signaturePad.fromData(points);
    };
    // Returns signature image as data URL (see https://mdn.io/todataurl for the list of possible paramters)
    SignaturePad.prototype.toDataURL = function (imageType, quality) {
        return this.signaturePad.toDataURL(imageType, quality); // save image as data URL
    };
    // Draws signature image from data URL
    SignaturePad.prototype.fromDataURL = function (dataURL, options) {
        if (options === void 0) { options = {}; }
        this.signaturePad.fromDataURL(dataURL, options);
    };
    // Clears the canvas
    SignaturePad.prototype.clear = function () {
        this.signaturePad.clear();
    };
    // Returns true if canvas is empty, otherwise returns false
    SignaturePad.prototype.isEmpty = function () {
        return this.signaturePad.isEmpty();
    };
    // Unbinds all event handlers
    SignaturePad.prototype.off = function () {
        this.signaturePad.off();
    };
    // Rebinds all event handlers
    SignaturePad.prototype.on = function () {
        this.signaturePad.on();
    };
    // set an option on the signaturePad - e.g. set('minWidth', 50);
    SignaturePad.prototype.set = function (option, value) {
        switch (option) {
            case 'canvasHeight':
                this.signaturePad._canvas.height = value;
                break;
            case 'canvasWidth':
                this.signaturePad._canvas.width = value;
                break;
            default:
                this.signaturePad[option] = value;
        }
    };
    // notify subscribers on signature begin
    SignaturePad.prototype.onBegin = function () {
        this.onBeginEvent.emit(true);
    };
    // notify subscribers on signature end
    SignaturePad.prototype.onEnd = function () {
        this.onEndEvent.emit(true);
    };
    SignaturePad.decorators = [
        { type: core_1.Component, args: [{
                    template: '<canvas></canvas>',
                    selector: 'signature-pad',
                },] },
    ];
    /** @nocollapse */
    SignaturePad.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    SignaturePad.propDecorators = {
        'options': [{ type: core_1.Input },],
        'onBeginEvent': [{ type: core_1.Output },],
        'onEndEvent': [{ type: core_1.Output },],
    };
    return SignaturePad;
}());
exports.SignaturePad = SignaturePad;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLXBhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ25hdHVyZS1wYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBRWIscUJBQW1FLGVBQWUsQ0FBQyxDQUFBO0FBUWxGLENBQUM7QUFJRjtJQVNFLHNCQUFZLFVBQXNCO1FBQ2hDLFFBQVE7UUFDUixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRU0seUNBQWtCLEdBQXpCO1FBQ0UsSUFBSSxFQUFFLEdBQVEsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELElBQUksTUFBTSxHQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4RSxFQUFFLENBQUMsQ0FBTyxJQUFJLENBQUMsT0FBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsTUFBTSxHQUFTLElBQUksQ0FBQyxPQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFPLElBQUksQ0FBQyxPQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxLQUFLLEdBQVMsSUFBSSxDQUFDLE9BQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pE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QUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN0QyxDQUFDO0lBQ0gsQ0FBQztJQUVELHdDQUF3QztJQUNqQyw4QkFBTyxHQUFkO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHNDQUFzQztJQUMvQiw0QkFBSyxHQUFaO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNJLHVCQUFVLEdBQTBCO1FBQzNDLEVBQUUsSUFBSSxFQUFFLGdCQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQ3hCLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxlQUFlO2lCQUMxQixFQUFHLEVBQUU7S0FDTCxDQUFDO0lBQ0Ysa0JBQWtCO0lBQ1gsMkJBQWMsR0FBNkQ7UUFDbEYsRUFBQyxJQUFJLEVBQUUsaUJBQVUsR0FBRztLQUNuQixDQUFDO0lBQ0ssMkJBQWMsR0FBMkM7UUFDaEUsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDN0IsY0FBYyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7UUFDbkMsWUFBWSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7S0FDaEMsQ0FBQztJQUNGLG1CQUFDO0FBQUQsQ0FBQyxBQWpJRCxJQWlJQztBQWpJWSxvQkFBWSxlQWlJeEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZGVjbGFyZSB2YXIgcmVxdWlyZTogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHRpbWU6IG51bWJlcjtcbn07XG5cblxuXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlUGFkIHtcblxuICAgcHVibGljIG9wdGlvbnM6IE9iamVjdDtcbiAgIHB1YmxpYyBvbkJlZ2luRXZlbnQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcbiAgIHB1YmxpYyBvbkVuZEV2ZW50OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgcHJpdmF0ZSBzaWduYXR1cmVQYWQ6IGFueTtcbiAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICAvLyBubyBvcFxuICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnRSZWY7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHt9O1xuICAgIHRoaXMub25CZWdpbkV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHRoaXMub25FbmRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgbGV0IHNwOiBhbnkgPSByZXF1aXJlKCdzaWduYXR1cmVfcGFkJylbJ2RlZmF1bHQnXTtcbiAgICBsZXQgY2FudmFzOiBhbnkgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcblxuICAgIGlmICgoPGFueT50aGlzLm9wdGlvbnMpWydjYW52YXNIZWlnaHQnXSkge1xuICAgICAgY2FudmFzLmhlaWdodCA9ICg8YW55PnRoaXMub3B0aW9ucylbJ2NhbnZhc0hlaWdodCddO1xuICAgIH1cblxuICAgIGlmICgoPGFueT50aGlzLm9wdGlvbnMpWydjYW52YXNXaWR0aCddKSB7XG4gICAgICBjYW52YXMud2lkdGggPSAoPGFueT50aGlzLm9wdGlvbnMpWydjYW52YXNXaWR0aCddO1xuICAgIH1cblxuICAgIHRoaXMuc2lnbmF0dXJlUGFkID0gbmV3IHNwKGNhbnZhcywgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLnNpZ25hdHVyZVBhZC5vbkJlZ2luID0gdGhpcy5vbkJlZ2luLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zaWduYXR1cmVQYWQub25FbmQgPSB0aGlzLm9uRW5kLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2FudmFzKCk6YW55e1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZVBhZC5fY2FudmFzO1xuICB9XG5cbiAgcHVibGljIHJlc2l6ZUNhbnZhcygpOiB2b2lkIHtcbiAgICAvLyBXaGVuIHpvb21lZCBvdXQgdG8gbGVzcyB0aGFuIDEwMCUsIGZvciBzb21lIHZlcnkgc3RyYW5nZSByZWFzb24sXG4gICAgLy8gc29tZSBicm93c2VycyByZXBvcnQgZGV2aWNlUGl4ZWxSYXRpbyBhcyBsZXNzIHRoYW4gMVxuICAgIC8vIGFuZCBvbmx5IHBhcnQgb2YgdGhlIGNhbnZhcyBpcyBjbGVhcmVkIHRoZW4uXG4gICAgY29uc3QgcmF0aW86IG51bWJlciA9IE1hdGgubWF4KHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEsIDEpO1xuICAgIGNvbnN0IGNhbnZhczogYW55ID0gdGhpcy5zaWduYXR1cmVQYWQuX2NhbnZhcztcbiAgICBjYW52YXMud2lkdGggPSBjYW52YXMub2Zmc2V0V2lkdGggKiByYXRpbztcbiAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLm9mZnNldEhlaWdodCAqIHJhdGlvO1xuICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLnNjYWxlKHJhdGlvLCByYXRpbyk7XG4gICAgdGhpcy5zaWduYXR1cmVQYWQuY2xlYXIoKTsgLy8gb3RoZXJ3aXNlIGlzRW1wdHkoKSBtaWdodCByZXR1cm4gaW5jb3JyZWN0IHZhbHVlXG4gIH1cblxuICAgLy8gUmV0dXJucyBzaWduYXR1cmUgaW1hZ2UgYXMgYW4gYXJyYXkgb2YgcG9pbnQgZ3JvdXBzXG4gIHB1YmxpYyB0b0RhdGEoKTogQXJyYXk8UG9pbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVQYWQudG9EYXRhKCk7XG4gIH1cblxuICAvLyBEcmF3cyBzaWduYXR1cmUgaW1hZ2UgZnJvbSBhbiBhcnJheSBvZiBwb2ludCBncm91cHNcbiAgcHVibGljIGZyb21EYXRhKHBvaW50czogQXJyYXk8UG9pbnQ+KTogdm9pZCB7XG4gICAgdGhpcy5zaWduYXR1cmVQYWQuZnJvbURhdGEocG9pbnRzKTtcbiAgfVxuXG4gIC8vIFJldHVybnMgc2lnbmF0dXJlIGltYWdlIGFzIGRhdGEgVVJMIChzZWUgaHR0cHM6Ly9tZG4uaW8vdG9kYXRhdXJsIGZvciB0aGUgbGlzdCBvZiBwb3NzaWJsZSBwYXJhbXRlcnMpXG4gIHB1YmxpYyB0b0RhdGFVUkwoaW1hZ2VUeXBlPzogc3RyaW5nLCBxdWFsaXR5PzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVQYWQudG9EYXRhVVJMKGltYWdlVHlwZSwgcXVhbGl0eSk7IC8vIHNhdmUgaW1hZ2UgYXMgZGF0YSBVUkxcbiAgfVxuXG4gIC8vIERyYXdzIHNpZ25hdHVyZSBpbWFnZSBmcm9tIGRhdGEgVVJMXG4gIHB1YmxpYyBmcm9tRGF0YVVSTChkYXRhVVJMOiBzdHJpbmcsIG9wdGlvbnM6IE9iamVjdCA9IHt9KTogdm9pZCB7XG4gICAgdGhpcy5zaWduYXR1cmVQYWQuZnJvbURhdGFVUkwoZGF0YVVSTCwgb3B0aW9ucyk7XG4gIH1cblxuICAvLyBDbGVhcnMgdGhlIGNhbnZhc1xuICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5zaWduYXR1cmVQYWQuY2xlYXIoKTtcbiAgfVxuXG4gIC8vIFJldHVybnMgdHJ1ZSBpZiBjYW52YXMgaXMgZW1wdHksIG90aGVyd2lzZSByZXR1cm5zIGZhbHNlXG4gIHB1YmxpYyBpc0VtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZVBhZC5pc0VtcHR5KCk7XG4gIH1cblxuICAvLyBVbmJpbmRzIGFsbCBldmVudCBoYW5kbGVyc1xuICBwdWJsaWMgb2ZmKCk6IHZvaWQge1xuICAgIHRoaXMuc2lnbmF0dXJlUGFkLm9mZigpO1xuICB9XG5cbiAgLy8gUmViaW5kcyBhbGwgZXZlbnQgaGFuZGxlcnNcbiAgcHVibGljIG9uKCk6IHZvaWQge1xuICAgIHRoaXMuc2lnbmF0dXJlUGFkLm9uKCk7XG4gIH1cblxuICAvLyBzZXQgYW4gb3B0aW9uIG9uIHRoZSBzaWduYXR1cmVQYWQgLSBlLmcuIHNldCgnbWluV2lkdGgnLCA1MCk7XG4gIHB1YmxpYyBzZXQob3B0aW9uOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblxuICAgIHN3aXRjaCAob3B0aW9uKSB7XG4gICAgICBjYXNlICdjYW52YXNIZWlnaHQnOlxuICAgICAgICB0aGlzLnNpZ25hdHVyZVBhZC5fY2FudmFzLmhlaWdodCA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NhbnZhc1dpZHRoJzpcbiAgICAgICAgdGhpcy5zaWduYXR1cmVQYWQuX2NhbnZhcy53aWR0aCA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuc2lnbmF0dXJlUGFkW29wdGlvbl0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBub3RpZnkgc3Vic2NyaWJlcnMgb24gc2lnbmF0dXJlIGJlZ2luXG4gIHB1YmxpYyBvbkJlZ2luKCk6IHZvaWQge1xuICAgIHRoaXMub25CZWdpbkV2ZW50LmVtaXQodHJ1ZSk7XG4gIH1cblxuICAvLyBub3RpZnkgc3Vic2NyaWJlcnMgb24gc2lnbmF0dXJlIGVuZFxuICBwdWJsaWMgb25FbmQoKTogdm9pZCB7XG4gICAgdGhpcy5vbkVuZEV2ZW50LmVtaXQodHJ1ZSk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgdGVtcGxhdGU6ICc8Y2FudmFzPjwvY2FudmFzPicsXG4gIHNlbGVjdG9yOiAnc2lnbmF0dXJlLXBhZCcsXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gW1xue3R5cGU6IEVsZW1lbnRSZWYsIH0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidvcHRpb25zJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ29uQmVnaW5FdmVudCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nb25FbmRFdmVudCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG59O1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=