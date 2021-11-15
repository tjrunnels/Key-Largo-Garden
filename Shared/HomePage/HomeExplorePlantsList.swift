//
//  HomeExplorePlantsList.swift
//  Key Largo Garden
//
//  Created by Tom Runnels on 11/12/21.
//

import SwiftUI

struct HomeExplorePlantsList: View {
    var numOfObjects: Int
    var body: some View {
        
        //object.  keeps the whitebox at the top
        VStack(alignment: .leading) {
            HStack {
                Text("Explore Plants")
                    .font(.largeTitle)
                    .bold()
                    .foregroundColor(.white)
                    .padding(.leading)
                Spacer()
            }
            
            ScrollView(.horizontal) {
                HStack {
                    ForEach((1...numOfObjects).reversed(), id: \.self) {
                        SmallPlantCard(name: "plant\(($0)%2 + 1)", size: 120)
                            .padding(.horizontal, 10)
                        }
                    VStack {
                        Image(systemName: "arrow.right.circle")
                            .resizable()
                            .frame(width: 50, height: 50)
                        Text("See All")
                    }
                    .foregroundColor(.white)
                    .padding()
                }
                .frame(maxWidth: .infinity)
                .padding(.bottom, 15)
            }
            
        }
        
        
        
    }
}

struct HomeExplorePlantsList_Previews: PreviewProvider {
    static var previews: some View {
        
        
        Group {
            HomeExplorePlantsList(numOfObjects: 1)
                .ignoresSafeArea(edges: .all)
                .frame(maxHeight: 300)
        }
        .background(
            LinearGradient(gradient: Gradient(colors: [.green, .blue]), startPoint: .bottomTrailing, endPoint: .topLeading)
                .opacity(0.7)
                .edgesIgnoringSafeArea(.all)
        )
        .previewLayout(.fixed(width: 400, height: 400))
        
    }
}
