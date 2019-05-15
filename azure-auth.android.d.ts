/// <reference path="platforms/android/typings/adal.android.d.ts" />
export declare class AzureAuth {
    private activity;
    private authority;
    private clientId;
    private context;
    private loginHint;
    private redirectUri;
    private resourceId;
    private userId;
    private promptBehaviour;
    private CONSOLE_TAG;
    constructor(authority: string, clientId: string, resourceId: string, redirectUri: string);
    login(clearCache?: boolean): Promise<string>;
    getToken(): Promise<string>;
    clearCache(): void;
}
