//
//  AppDelegate.m
//  RNProject
//
//  Created by mengshun on 2022/8/8.
//

#import "AppDelegate.h"

@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    
    UINavigationController *nav = [[UINavigationController alloc] initWithRootViewController:self.window.rootViewController];
    self.window.rootViewController = nav;
    return YES;
}

@end
