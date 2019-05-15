/// <reference path="platforms/ios/typings/adal.ios.d.ts" />
export declare class AzureAuth {
    private authenticationError;
    private authority;
    private clientId;
    private context;
    private redirectUri;
    private resourceId;
    private userId;
    private keyChainCache;
    private promptBehaviour;
    private CONSOLE_TAG;
    constructor(authority: string, clientId: string, resourceId: string, redirectUri: string);
    login(clearCache?: boolean): Promise<string>;
    getToken(): Promise<string>;
    clearCache(): void;
}
