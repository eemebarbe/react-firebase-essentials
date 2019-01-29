"use strict";
// The MIT License (MIT)
//
// Copyright (c) 2017 Firebase
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
Object.defineProperty(exports, "__esModule", { value: true });
const cloud_functions_1 = require("../cloud-functions");
/** @internal */
exports.provider = 'google.firebase.crashlytics';
/** @internal */
exports.service = 'fabric.io';
/**
 * Handle events related to Crashlytics issues. An issue in Crashlytics is an
 * aggregation of crashes which have a shared root cause.
 */
function issue() {
    return _issueWithOpts({});
}
exports.issue = issue;
/** @internal */
function _issueWithOpts(opts) {
    return new IssueBuilder(() => {
        if (!process.env.GCLOUD_PROJECT) {
            throw new Error('process.env.GCLOUD_PROJECT is not set.');
        }
        return 'projects/' + process.env.GCLOUD_PROJECT;
    }, opts);
}
exports._issueWithOpts = _issueWithOpts;
/** Builder used to create Cloud Functions for Crashlytics issue events. */
class IssueBuilder {
    /** @internal */
    constructor(triggerResource, opts) {
        this.triggerResource = triggerResource;
        this.opts = opts;
    }
    /** @internal */
    onNewDetected(handler) {
        throw new Error('"onNewDetected" is now deprecated, please use "onNew"');
    }
    /** Handle Crashlytics New Issue events. */
    onNew(handler) {
        return this.onEvent(handler, 'issue.new');
    }
    /** Handle Crashlytics Regressed Issue events. */
    onRegressed(handler) {
        return this.onEvent(handler, 'issue.regressed');
    }
    /** Handle Crashlytics Velocity Alert events. */
    onVelocityAlert(handler) {
        return this.onEvent(handler, 'issue.velocityAlert');
    }
    onEvent(handler, eventType) {
        return cloud_functions_1.makeCloudFunction({
            handler,
            provider: exports.provider,
            eventType,
            service: exports.service,
            legacyEventType: `providers/firebase.crashlytics/eventTypes/${eventType}`,
            triggerResource: this.triggerResource,
            opts: this.opts,
        });
    }
}
exports.IssueBuilder = IssueBuilder;
